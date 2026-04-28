import { provinceEnToMeta } from "./map_region";

export function getZoneIdByProvinceEn(
    provinceEn?: string
) {
    if (!provinceEn) return undefined;
    return provinceEnToMeta[provinceEn]?.zoneId;
}
