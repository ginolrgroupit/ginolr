import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Line,
} from "react-simple-maps";

const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type MarkerType = {
    name: string;
    coordinates: [number, number];
};

const thailand: MarkerType = {
    name: "Thailand",
    coordinates: [100.9925, 15.87],
};

const markers: MarkerType[] = [
    thailand,
    { name: "Japan", coordinates: [139.6917, 35.6895] },
    { name: "Russia", coordinates: [90.3187, 61.135] },
    { name: "USA", coordinates: [-97.743, 43.0902] },
    { name: "South America", coordinates: [-60.6333, -5.55] },
    { name: "South Africa", coordinates: [17.2333, 15.7333] },
    { name: 'uk', coordinates: [-0.1278, 51.5074] },
    { name: 'indonesia', coordinates: [140.8, -6.2] },
    { name: 'australia', coordinates: [133.7751, -25.2744] },
];

export default function WorldDotMap() {
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 270,
                center: [0, 20],
            }}
            style={{ width: "100%", height: "400" }}
        >
            {/* DOT PATTERN */}
            <defs>
                <pattern
                    id="dotPattern"
                    patternUnits="userSpaceOnUse"
                    width={6}
                    height={6}
                >
                    <circle cx={3} cy={3} r={1.7} fill="#CBD5E1" />
                </pattern>
            </defs>

            {/* WORLD MAP */}
            <Geographies geography={geoUrl}>
                {({ geographies }: any) =>
                    geographies.map((geo: any) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="url(#dotPattern)"
                            stroke="none"
                            style={{
                                pressed: { outline: "none" },
                                hover: { outline: "none" },
                            }}
                        />
                    ))
                }
            </Geographies>

            {/* CURVED LINES FROM THAILAND */}
            {markers
                .filter((m) => m.name !== "Thailand")
                .map((m) => (
                    <Line
                        key={`line-${m.name}`}
                        from={thailand.coordinates}
                        to={m.coordinates}
                        stroke="#14B8A6"
                        strokeWidth={2.5}
                        strokeOpacity={0.4}
                        greatCircle={true}
                    />
                ))}

            {/* MARKERS */}
            {markers.map((m) => (
                <Marker key={m.name} coordinates={m.coordinates}>
                    <circle r={5} fill="#14B8A6" />
                    <circle r={15} fill="#14B8A6" opacity={0.25} />
                </Marker>
            ))}
        </ComposableMap>
    );
}
