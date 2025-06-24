import { default as nationalFlags } from './nationalFlag';
import { default as ProductsMenu } from './ProductsMenu';
import { default as ResourcesMenu } from './ResourcesMenu';
import { default as StreamMenu } from './StreamMenu';
import { obeyDevice } from './isMobile';
import { default as AcademyMenu } from './AcademyMenu';
import { default as CDNenu } from './CDNenu';
import { mergeWithDefaults } from './utils';

const remToPixel = (rem: any) => {
    if (rem === undefined || rem === "") {
        return "0px";
    }
    rem = rem.slice(0, rem.length - 3);
    rem = String(8 * Number(rem)) + "px";
    return rem;
}

export {
    nationalFlags,
    ProductsMenu,
    ResourcesMenu,
    StreamMenu,
    obeyDevice,
    CDNenu,
    AcademyMenu,
    remToPixel,
    mergeWithDefaults,
};