import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";
import { getZoneIdByProvinceEn } from "./zone.helper";
import { ZONE_COLORS } from "./zone.color";


const geoUrl = "/thailand-provinces.json";

export default function ThailandMap() {
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 1800,
                center: [101, 13],
            }}
            width={400}
            height={500}
            style={{ width: "100%", height: "100%" }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }: any) =>
                    geographies.map((geo: any) => {
                        const provinceEn = geo.properties?.name;
                        const zoneId = getZoneIdByProvinceEn(provinceEn);

                        const fillColor =
                            (zoneId && ZONE_COLORS[zoneId]) || "#E0E0E0";

                        return (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={fillColor}
                                style={{
                                    default: {
                                        outline: "none",
                                        stroke: fillColor,
                                        strokeWidth: 0.6,
                                    },
                                    pressed: { outline: "none" },
                                    hover: { outline: "none" },
                                }}
                            />
                        );
                    })
                }
            </Geographies>
        </ComposableMap>
    );
}
