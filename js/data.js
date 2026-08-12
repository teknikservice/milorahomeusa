const FABRICS = [
  { id: "botanical-archive-001-3733", code: "001-3733", name: "Botanical Archive", collection: "Botanical", image: "images/botanical-archive-001-3733.jpg", composition: "60% Cotton, 40% Polyester", weight: "450 g/m²", width: "55 in / 140 cm", martindale: "45,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "botanical-archive-002-3733", code: "002-3733", name: "Botanical Archive", collection: "Botanical", image: "images/botanical-archive-002-3733.jpg", composition: "60% Cotton, 40% Polyester", weight: "450 g/m²", width: "55 in / 140 cm", martindale: "45,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "dragon", code: "N/A", name: "Dragon", collection: "Exotics", image: "images/dragon.jpg", composition: "100% Polyester", weight: "420 g/m²", width: "55 in / 140 cm", martindale: "60,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "hm-029", code: "029", name: "HM Texture", collection: "HM", image: "images/hm-029.jpg", composition: "90% Polyester, 10% Acrylic", weight: "650 g/m²", width: "55 in / 140 cm", martindale: "80,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "hm-030", code: "030", name: "HM Texture", collection: "HM", image: "images/hm-030.jpg", composition: "90% Polyester, 10% Acrylic", weight: "650 g/m²", width: "55 in / 140 cm", martindale: "80,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "hm-043", code: "043", name: "HM Texture", collection: "HM", image: "images/hm-043.jpg", composition: "90% Polyester, 10% Acrylic", weight: "650 g/m²", width: "55 in / 140 cm", martindale: "80,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "jungle-01-mint", code: "01", name: "Jungle Mint", collection: "Jungle", image: "images/jungle-01-mint.jpg", composition: "100% Polyester", weight: "520 g/m²", width: "55 in / 140 cm", martindale: "100,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "jungle-01-mustard", code: "01", name: "Jungle Mustard", collection: "Jungle", image: "images/jungle-01-mustard.jpg", composition: "100% Polyester", weight: "520 g/m²", width: "55 in / 140 cm", martindale: "100,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "jungle-02", code: "02", name: "Jungle", collection: "Jungle", image: "images/jungle-02.jpg", composition: "100% Polyester", weight: "520 g/m²", width: "55 in / 140 cm", martindale: "100,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "jungle-04-ml-3395-kf", code: "04-ML-3395-KF", name: "Jungle", collection: "Jungle", image: "images/jungle-04-ml-3395-kf.jpg", composition: "100% Polyester", weight: "520 g/m²", width: "55 in / 140 cm", martindale: "100,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "jungle-05-slvr-tiger", code: "05", name: "Jungle Silver Tiger", collection: "Jungle", image: "images/jungle-05-slvr-tiger.jpg", composition: "100% Polyester", weight: "520 g/m²", width: "55 in / 140 cm", martindale: "100,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "reef", code: "N/A", name: "Reef", collection: "Oceania", image: "images/reef.jpg", composition: "55% Viscose, 45% Polyester", weight: "520 g/m²", width: "55 in / 140 cm", martindale: "60,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" },
  { id: "zebra", code: "N/A", name: "Zebra", collection: "Safari", image: "images/zebra.jpg", composition: "100% Polyester", weight: "420 g/m²", width: "55 in / 140 cm", martindale: "60,000 rubs", minOrder: "5 yards (cut) / 50 yards (roll)", leadTime: "3-5 business days" }
];

const SHOWS = [
  { name: "Interwoven Textile Fair", city: "High Point, NC", dates: "Nov 17 to Nov 19, 2026", note: "Find us at Market Square" }
];

const PAST_SHOWS = [
  { edition: "Spring 2026", dates: "May 19 to 21, 2026", name: "Interwoven Textile Fair" },
  { edition: "Fall 2025", dates: "Nov 18 to 20, 2025", name: "Interwoven Textile Fair" },
  { edition: "Spring 2025", dates: "May 20 to 22, 2025", name: "Interwoven Textile Fair" },
  { edition: "Fall 2024", dates: "Nov 19 to 21, 2024", name: "Interwoven Textile Fair" },
  { edition: "2024", dates: "May 21 to 25, 2024", name: "HOMETEX (EVTEKS) Istanbul" },
  { edition: "Spring 2024", dates: "May 7 to 9, 2024", name: "Interwoven Textile Fair" },
  { edition: "2023", dates: "May 16 to 20, 2023", name: "HOMETEX (EVTEKS) Istanbul" },
  { edition: "2022", dates: "May 17 to 21, 2022", name: "HOMETEX (EVTEKS) Istanbul" },
  { edition: "2021", dates: "Sep 20 to 24, 2021", name: "EVTEKS Istanbul" },
  { edition: "2020", dates: "Jan 7 to 10, 2020", name: "Heimtextil Frankfurt" },
  { edition: "2019", dates: "Apr 23 to 27, 2019", name: "EVTEKS Istanbul" },
  { edition: "2018", dates: "Apr 24 to 28, 2018", name: "EVTEKS Istanbul" },
  { edition: "2017", dates: "May 16 to 20, 2017", name: "EVTEKS Istanbul" },
  { edition: "2016", dates: "May 17 to 21, 2016", name: "EVTEKS Istanbul" }
];

const CONTACT = {
  email: "sales@milorahome.com",
  phone: "773-425-6720",
  address: "Chicago, IL, USA"
};

// Expose variables globally
window.FABRICS = FABRICS;
window.SHOWS = SHOWS;
window.PAST_SHOWS = PAST_SHOWS;
window.CONTACT = CONTACT;
