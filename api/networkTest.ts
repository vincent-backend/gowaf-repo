import countryCode from '../utils/country.json';
import axios from 'axios';

export const runMeasure = async ( measureType: string, payload: any ) => {
    const nodesData = await axios.get('https://test.api.aicesu.com/api/node/get_node?type=geolocation');
    const nodes = nodesData.data.data;
    
    const isp_global = countryCode.map(c=>c.zh).join(',');

    if (measureType === 'dns') {
        const GLOBAL_PING_BASEURL = "https://test.api.aicesu.com/api/speed/speed_control";
        const dnsPing = await axios.post(GLOBAL_PING_BASEURL, {
            "action": "dns",
            "dns": "8.8.8.8",
            "record": payload.dnsType,
            "isp": isp_global,
            "target": payload.domain
        })

        if (dnsPing.data.status === false) {
            return [];
        }

        const jobid = dnsPing.data.data.jobid;

        // Wait for 6 seconds
        await new Promise(resolve => setTimeout(resolve, 6000));

        const dnsData = await axios.get(GLOBAL_PING_BASEURL, {
            params: {
            "jobid": jobid,
            "action": "dns",
            "remain_time": 0,
            "target": payload.domain
            }
        })

        if (dnsData.data) {
            const measure_result= dnsData.data.data.checkpoints.slice(0, Math.max(parseInt(100), 1)).map(checkpoint => {
                let region = countryCode.find(c => c.zh.includes(checkpoint.node_isp));
                let lat = 0;
                let lng = 0;
                if (nodes !== null) {
                    let node = nodes[checkpoint.node_id];
                    lat = node.latitude;
                    lng = node.longitude;
                }

                if (region) {
                return {...checkpoint, code: region.value.toLowerCase(), lat: lat, lng: lng};
                } else {
                return {...checkpoint, code: "", lat: lat, lng: lng};
                }
            });

            return measure_result;
        }
    } else if (measureType === 'ping') {
        const GLOBAL_PING_BASEURL = "https://test.api.aicesu.com/api/speed/speed_control";
        const ping = await axios.post(GLOBAL_PING_BASEURL, {
            "action": "ping",
            "isp": isp_global,
            "target": payload.domain
        })

        if (ping.data.status === false) {
            return [];
        }

        const jobid = ping.data.data.jobid;

        // Wait for 6 seconds
        await new Promise(resolve => setTimeout(resolve, 6000));

        const pingData = await axios.get(GLOBAL_PING_BASEURL, {
            params: {
                "jobid": jobid,
                "action": "ping",
                "remain_time": 0,
                "target": payload.domain
            }
        })

        if (pingData.data) {
            const measure_result= pingData.data.data.checkpoints.slice(0, Math.max(parseInt(100), 1)).map(checkpoint => {
                let region = countryCode.find(c => c.zh.includes(checkpoint.node_isp));
                let lat = 0;
                let lng = 0;
                if (nodes !== null) {
                let node = nodes[checkpoint.node_id];
                lat = node.latitude;
                lng = node.longitude;
                }

                if (region) {
                return {...checkpoint, code: region.value.toLowerCase(), lat: lat, lng: lng};
                } else {
                return {...checkpoint, code: "", lat: lat, lng: lng};
                }
            });

            return measure_result;
        }
    } else if (measureType === 'traceroute') {
        const GLOBAL_PING_BASEURL = "https://test.api.aicesu.com/api/speed/speed_control";
        const tracePing = await axios.post(GLOBAL_PING_BASEURL, {
            "action": "route",
            "isp": Object.keys(nodes).join(','),
            "target": payload.domain
        })

        if (tracePing.data.status === false) {
            return [];
        }

        const jobid = tracePing.data.data.jobid;

        // Wait for 6 seconds
        await new Promise(resolve => setTimeout(resolve, 6000));

        const traceData = await axios.get(GLOBAL_PING_BASEURL, {
            params: {
                "jobid": jobid,
                "action": "route",
                "remain_time": 0,
                "target": payload.domain
            }
        })

        if (traceData.data) {
            const measure_result= traceData.data.data.checkpoints.slice(0, Math.max(parseInt(100), 1)).map(checkpoint => {
            let region = countryCode.find(c => c.zh.includes(checkpoint.node_isp));
            let lat = 0;
            let lng = 0;
            if (nodes !== null) {
            let node = nodes[checkpoint.node_id];
            lat = node.latitude;
            lng = node.longitude;
            }

            if (region) {
            return {...checkpoint, code: region.value.toLowerCase(), lat: lat, lng: lng};
            } else {
            return {...checkpoint, code: "", lat: lat, lng: lng};
            }
            });

            return measure_result;
        }
    } else if (measureType === 'http') {
        const GLOBAL_PING_BASEURL = "https://test.api.aicesu.com/api/speed/speed_control";
        const httpPing = await axios.post(GLOBAL_PING_BASEURL, {
            "action": "http",
            "isp": isp_global   ,
            "specify_ip": "",
            "target": payload.domain
        })

        if (httpPing.data.status === false) {
            return [];
        }

        const jobid = httpPing.data.data.jobid;

        // Wait for 6 seconds
        await new Promise(resolve => setTimeout(resolve, 1000));

        const httpData = await axios.get(GLOBAL_PING_BASEURL, {
            params: {
                "jobid": jobid,
                "action": "http",
                "remain_time": 0,
                "target": payload.domain
            }
        })

        if (httpData.data) {
            const measure_result= httpData.data.data.checkpoints.slice(0, Math.max(parseInt(100), 1)).map(checkpoint => {
                let region = countryCode.find(c => c.zh.includes(checkpoint.node_isp));
                let lat = 0;
                let lng = 0;
                if (nodes !== null) {
                let node = nodes[checkpoint.node_id];
                lat = node.latitude;
                lng = node.longitude;
                }

                if (region) {
                return {...checkpoint, code: region.value.toLowerCase(), lat: lat, lng: lng};
                } else {
                return {...checkpoint, code: "", lat: lat, lng: lng};
                }
            });

            return measure_result;
        }
    }
}