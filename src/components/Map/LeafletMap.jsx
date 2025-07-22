import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";

export default function LeafletMap() {
	const buildings = {
		type: "FeatureCollection",
		name: "edificios",
		crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
		features: [
			{
				type: "Feature",
				properties: { id: 1, name: "Plató", type: "soundstage", en: "Soundstages", es: "Platós" },
				geometry: {
					type: "MultiPolygon",
					coordinates: [
						[
							[
								[-0.531850231387342, 38.3082496882339],
								[-0.531740691993181, 38.30835250016731],
								[-0.531810726479198, 38.308404683032066],
								[-0.531438835447359, 38.308769988427045],
								[-0.531364218122964, 38.308724643844144],
								[-0.531257657765181, 38.308823434563159],
								[-0.530714124718648, 38.308476033974351],
								[-0.531320320722927, 38.307886250856519],
								[-0.531852955863766, 38.308245412510637],
								[-0.531850231387342, 38.3082496882339],
							],
						],
					],
				},
			},
			{
				type: "Feature",
				properties: {
					id: 2,
					name: "Edificio de Producción",
					type: "support",
					en: "Production Support Building",
					es: "Edificio de Producción",
				},
				geometry: {
					type: "MultiPolygon",
					coordinates: [
						[
							[
								[-0.531152505185811, 38.307874443925257],
								[-0.530660163092947, 38.308346745353191],
								[-0.530625938195654, 38.308327562636165],
								[-0.530611270382529, 38.308344827081719],
								[-0.530557488401069, 38.308314134731219],
								[-0.530572156214195, 38.308300706823793],
								[-0.530547709858986, 38.308281524094589],
								[-0.530567266943153, 38.308258504812848],
								[-0.530520818868256, 38.308164509336571],
								[-0.530564477034349, 38.308147908999032],
								[-0.530608825747008, 38.308129980355524],
								[-0.530647698049308, 38.3081102890417],
								[-0.530687054083677, 38.30808394168853],
								[-0.530733502158574, 38.308055167506822],
								[-0.530651834511554, 38.308005401095045],
								[-0.530717631963088, 38.307938725803155],
								[-0.530794618046596, 38.307986109424156],
								[-0.530827938355928, 38.307952535823382],
								[-0.530838228850085, 38.307935676241691],
								[-0.530842865226573, 38.30792751265335],
								[-0.530855327292126, 38.307910687969802],
								[-0.530872151620862, 38.307888045101222],
								[-0.530902182009515, 38.307805790787185],
								[-0.531010016664939, 38.307824180927838],
								[-0.531039211560653, 38.307799562304147],
								[-0.531070861860457, 38.307821137071613],
								[-0.531081914542443, 38.307810161990375],
								[-0.531134422384, 38.307844156492173],
								[-0.531120695821824, 38.307856663821298],
								[-0.531152505185811, 38.307874443925257],
							],
						],
					],
				},
			},
			{
				type: "Feature",
				properties: { id: 3, name: "Plató", type: "soundstage", en: "Soundstage", es: "Plató" },
				geometry: {
					type: "MultiPolygon",
					coordinates: [
						[
							[
								[-0.531559177265571, 38.30702502163436],
								[-0.531228495331239, 38.307342825405136],
								[-0.530545387381723, 38.306916801286668],
								[-0.530890666033701, 38.306578748921808],
								[-0.531059327495036, 38.306691121073861],
								[-0.53110149286037, 38.306646172233947],
								[-0.531472229846134, 38.306892141933815],
								[-0.531427677762008, 38.306935217759886],
								[-0.531559177265571, 38.30702502163436],
							],
						],
					],
				},
			},
			{
				type: "Feature",
				properties: {
					id: 4,
					name: "Edificio de Producción",
					type: "support",
					en: "Production Support Building",
					es: "Edificio de Suporte",
				},
				geometry: {
					type: "MultiPolygon",
					coordinates: [
						[
							[
								[-0.531084920883795, 38.307423718247762],
								[-0.531059612256507, 38.307446887754217],
								[-0.531078593726973, 38.307458472504663],
								[-0.531017431211026, 38.307514741266225],
								[-0.530977359217819, 38.307483296963674],
								[-0.530880342813213, 38.307526326005835],
								[-0.530819180297266, 38.307440267895991],
								[-0.530724272944934, 38.307374069280478],
								[-0.530661001376713, 38.307405513630378],
								[-0.530580857390299, 38.307355864650624],
								[-0.530616711278957, 38.307312835507332],
								[-0.530517585822077, 38.307261531495442],
								[-0.530405806051553, 38.307244981806434],
								[-0.53043533278339, 38.307142373650372],
								[-0.530384715528813, 38.307110929186379],
								[-0.530441659940212, 38.307046385243915],
								[-0.530477513828871, 38.307067899897788],
								[-0.530504931508433, 38.307036455401523],
								[-0.531084920883795, 38.307423718247762],
							],
						],
					],
				},
			},
			{
				type: "Feature",
				properties: { id: 5, name: "Plató", type: "soundstage", en: "Soundstage", es: "Plató" },
				geometry: {
					type: "MultiPolygon",
					coordinates: [
						[
							[
								[-0.530012467802444, 38.308505229818451],
								[-0.529681346595419, 38.308829597398223],
								[-0.52953582198851, 38.308735266159822],
								[-0.529480986629385, 38.308784914195328],
								[-0.529095030063235, 38.308549913193666],
								[-0.529154083526908, 38.308495300175778],
								[-0.529000122710902, 38.308399313559846],
								[-0.529327025813379, 38.308069979205051],
								[-0.530012467802444, 38.308505229818451],
							],
						],
					],
				},
			},
			{
				type: "Feature",
				properties: {
					id: 6,
					name: "Edificio de Producción",
					type: "support",
					en: "Production Support Building",
					es: "Edificio de Soporte",
				},
				geometry: {
					type: "MultiPolygon",
					coordinates: [
						[
							[
								[-0.530090502736584, 38.308397658617082],
								[-0.529462005158918, 38.308003781164295],
								[-0.52952527672714, 38.30792599838918],
								[-0.529544258197606, 38.30794089296959],
								[-0.529561130615798, 38.307921033528373],
								[-0.529590657347635, 38.30793261820309],
								[-0.529715091431804, 38.30789124435632],
								[-0.529765708686381, 38.30797233707375],
								[-0.529852179829617, 38.308040190094189],
								[-0.529904906136468, 38.307995506404943],
								[-0.529987159175155, 38.308053429700536],
								[-0.529934432868304, 38.308111352949858],
								[-0.530037776429732, 38.308164311308751],
								[-0.530160101461627, 38.308194100368645],
								[-0.530128465677516, 38.308281812529486],
								[-0.530153774304805, 38.308308291651528],
								[-0.530132683782065, 38.308319876264392],
								[-0.530153774304805, 38.308338080652277],
								[-0.530090502736584, 38.308397658617082],
							],
						],
					],
				},
			},
		],
	};

	useEffect(() => {
		const info = L.control();
		const legend = L.control({ position: "bottomright" });

		const map = L.map("map").setView([38.30816, -0.53018], 16);

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: "&copy; OpenStreetMap contributors",
		}).addTo(map);

		L.marker([38.30816, -0.53018]).addTo(map).bindPopup("Ciudad de la Luz, Alicante").openPopup();

		const geojson = L.geoJSON(buildings, {
			onEachFeature: onEachFeature,
			style: style,
		}).addTo(map);

		function getColor(type) {
			switch (type) {
				case "support":
					return "#ff0000"; // Red for support buildings
				case "soundstage":
					return "#0000ff"; // Blue for soundstages
				default:
					return "#666"; // Gray for other types
			}
		}

		function style(feature) {
			return {
				fillColor: getColor(feature.properties.type),
				weight: 2,
				opacity: 1,
				color: "white",
				dashArray: "3",
				fillOpacity: 0.7,
			};
		}

		function onEachFeature(feature, layer) {
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
			});
			// does this feature have a property named popupContent?
			if (feature.properties && feature.properties.name) {
				layer.bindPopup(feature.properties.name);
			}
		}

		function highlightFeature(e) {
			var layer = e.target;

			layer.setStyle({
				weight: 5,
				color: "#666",
				dashArray: "",
				fillOpacity: 0.7,
			});

			layer.bringToFront();
			info.update(layer.feature.properties);
		}

		function resetHighlight(e) {
			geojson.resetStyle(e.target);
			info.update();
		}

		info.onAdd = function (map) {
			this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
			this.update();
			return this._div;
		};

		// method that we will use to update the control based on feature properties passed
		info.update = function (props) {
			this._div.innerHTML =
				"<h3>Instalaciones</h3>" +
				(props ? "<b>" + props.name + "</b><br />" + props.en : "Pase el cursor sobre un estado");
		};

		legend.onAdd = function (map) {
			var div = L.DomUtil.create("div", "info legend"),
				buildings_types = ["support", "soundstage"],
				labels = ["Edificios de Producción", "Platós"];

			// loop through our density intervals and generate a label with a colored square for each interval
			for (var i = 0; i < buildings_types.length; i++) {
				div.innerHTML +=
					'<i style="background:' + getColor(buildings_types[i]) + '"></i> ' + labels[i] + "<br>";
			}

			return div;
		};

		legend.addTo(map);
		info.addTo(map);
	}, []);

	return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
}
