export type ZoneId =
    | "bangkok"
    | "central"
    | "north_upper"
    | "north_lower"
    | "northeast_upper"
    | "northeast_lower"
    | "south_upper"
    | "south_lower";

export const ZONES_CONFIG: Record<
    ZoneId,
    {
        labelTh: string;
        labelEn: string;
        provinces: string[];
    }
> = {
    bangkok: {
        labelTh: "กรุงเทพมหานคร",
        labelEn: "Bangkok",
        provinces: ["Bangkok Metropolis"],
    },

    central: {
        labelTh: "ภาคกลาง",
        labelEn: "Central",
        provinces: [
            "Samut Sakhon",
            "Nonthaburi",
            "Pathum Thani",
            "Samut Prakan",
            "Samut Songkhram",
            "Nakhon Pathom",
            "Ratchaburi",
            "Suphan Buri",
            "Ang Thong",
            "Sing Buri",
            "Chai Nat",
            "Lop Buri",
            "Phra Nakhon Si Ayutthaya",
            "Saraburi",
            "Phetchaburi",
            "Prachuap Khiri Khan",
            "Kanchanaburi",
            "Uthai Thani",
            "Nakhon Nayok",
            "Prachin Buri",
            "Nakhon Sawan",
            "Chon Buri",
            "Chachoengsao",
            "Chanthaburi",
            "Sa Kaeo",
            "Rayong",
            "Trat"
        ],
    },

    north_upper: {
        labelTh: "ภาคเหนือตอนบน",
        labelEn: "Upper Northern",
        provinces: [
            "Chiang Mai",
            "Chiang Rai",
            "Mae Hong Son",
            "Lamphun",
            "Lampang",
            "Phayao",
            "Nan",
            "Phrae",
        ],
    },

    north_lower: {
        labelTh: "ภาคเหนือตอนล่าง",
        labelEn: "Lower Northern",
        provinces: [
            "Uttaradit",
            "Phitsanulok",
            "Sukhothai",
            "Tak",
            "Kamphaeng Phet",
            "Phichit",
            "Phetchabun",
        ],
    },

    northeast_upper: {
        labelTh: "ภาคอีสานตอนบน",
        labelEn: "Upper Northeastern",
        provinces: [
            "Loei",
            "Nong Khai",
            "Udon Thani",
            "Nong Bua Lam Phu",
            "Sakon Nakhon",
            "Nakhon Phanom",
            "Bueng Kan",
        ],
    },

    northeast_lower: {
        labelTh: "ภาคอีสานตอนล่าง",
        labelEn: "Lower Northeastern",
        provinces: [
            "Kalasin",
            "Khon Kaen",
            "Maha Sarakham",
            "Roi Et",
            "Buriram",
            "Surin",
            "Sisaket",
            "Ubon Ratchathani",
            "Yasothon",
            "Amnat Charoen",
            "Mukdahan",
            "Chaiyaphum",
            "Nakhon Ratchasima",
            "Si Sa Ket",
            "Buri Ram"
        ],
    },

    south_upper: {
        labelTh: "ภาคใต้ตอนบน",
        labelEn: "Upper Southern",
        provinces: [
            "Chumphon",
            "Ranong",
            "Surat Thani",
            "Phangnga",
            "Phuket",
            "Nakhon Si Thammarat",
            "Krabi",
        ],
    },

    south_lower: {
        labelTh: "ภาคใต้ตอนล่าง",
        labelEn: "Lower Southern",
        provinces: [
            "Trang",
            "Satun",
            "Songkhla",
            "Phatthalung",
            "Pattani",
            "Yala",
            "Narathiwat",
        ],
    },
};

//------------------------------------------------------
// 3) Province Lookup (เลือกโซนจากชื่อ EN)
//------------------------------------------------------

export interface ProvinceMeta {
    en: string;
    zoneId: ZoneId;
}

export const provinceEnToMeta: Record<string, ProvinceMeta> = (() => {
    const map: Record<string, ProvinceMeta> = {};

    for (const zoneId in ZONES_CONFIG) {
        const z = ZONES_CONFIG[zoneId as ZoneId];
        z.provinces.forEach((p) => {
            map[p] = {
                en: p,
                zoneId: zoneId as ZoneId,
            };
        });
    }

    return map;
})();

//------------------------------------------------------
// 4) Zone Lookup (ดึง label / color จาก zoneId ง่าย ๆ)
//------------------------------------------------------

export const zoneMetaById = ZONES_CONFIG;
