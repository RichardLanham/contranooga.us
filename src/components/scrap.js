export const test = {
  address_components: [
    { long_name: "124", short_name: "124", types: ["street_number"] },
    { long_name: "First Road", short_name: "First Rd", types: ["route"] },
    {
      long_name: "Summertown",
      short_name: "Summertown",
      types: ["locality", "political"],
    },
    {
      long_name: "Lewis County",
      short_name: "Lewis County",
      types: ["administrative_area_level_2", "political"],
    },
    {
      long_name: "Tennessee",
      short_name: "TN",
      types: ["administrative_area_level_1", "political"],
    },
    {
      long_name: "United States",
      short_name: "US",
      types: ["country", "political"],
    },
    { long_name: "38483", short_name: "38483", types: ["postal_code"] },
  ],
  formatted_address: "124 First Rd, Summertown, TN 38483, USA",
  geometry: {
    bounds: {
      northeast: { lat: 35.4878564, lng: -87.3346534 },
      southwest: { lat: 35.4877746, lng: -87.3348231 },
    },
    location: { lat: 35.4878286, lng: -87.3347442 },
    location_type: "ROOFTOP",
    viewport: {
      northeast: { lat: 35.4892840302915, lng: -87.33339621970849 },
      southwest: { lat: 35.4865860697085, lng: -87.3360941802915 },
    },
  },
  place_id: "ChIJPdEUjgM5Y4gR_lD5G6zHACA",
  types: ["premise"],
};
