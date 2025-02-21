import rpclist from '../../rpc.json';

interface Message {
  name: string;
  code: string;
  doc: string;
}

interface Method {
  name: string;
  requestMessageName: string;
  responseMessageName: string;
  code: string;
  doc: string;
  roles: string[];
  isDeprecated: boolean;
  filename: string;
}

interface Links {
  name: string;
  content: string;
}

interface Service {
  name: string;
  methods: Method[];
  filename: string;
  doc: string;
}

interface RpcData {
  services: Service[];
  messages: Message[];
  links: Links[];
}

export default defineEventHandler(async event => {
  try {
    // 读取rpc.json文件
    const rpcData = rpclist as RpcData;

    // 获取请求参数中的role
    const query = getQuery(event);
    const role = String(query.role || 'admin');

    // 获取消息定义的Map
    const messageMap = new Map(rpcData.messages.map(msg => [msg.name, msg]));
    const linksMap = new Map(rpcData.links.map(link => [link.name, link]));

    // 过滤出该角色可访问的API
    const apis = rpcData.services.flatMap(service =>
      service.methods
        .filter(method => method.roles && method.roles.includes(role))
        .map(method => {
          // 构建HTTP请求路径
          const httpPath = `/${service.name}/${method.name}`;

          // 获取请求和响应消息的定义
          const requestMessage = messageMap.get(method.requestMessageName);
          const responseMessage = messageMap.get(method.responseMessageName);

          return {
            name: method.name,
            service: service.name,
            serviceDoc: service.doc,
            requestMessage: method.requestMessageName,
            responseMessage: method.responseMessageName,
            doc: method.doc,
            code: method.code,
            isDeprecated: method.isDeprecated,
            filename: method.filename || service.filename,
            roles: method.roles,
            httpMethod: 'POST',
            httpPath,
            // 添加请求和响应消息的详细信息
            requestDetail: requestMessage ? requestMessage : null,
            responseDetail: responseMessage ? responseMessage : null,
            // 添加相关链接
            links: linksMap.get(method.name) ? linksMap.get(method.name) : null,
          };
        })
    );

    return {
      code: 200,
      data: apis
    };
  } catch (error) {
    console.error('Error loading API docs:', error);
    return {
      code: 500,
      message: 'Internal server error'
    };
  }
});
