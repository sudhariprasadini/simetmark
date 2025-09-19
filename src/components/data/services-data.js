import image1 from "../assets/img/service/services-1.jpg";
import image11 from "../assets/img/service/services-11.jpg";
import image12 from "../assets/img/service/services-12.jpg";
import image21 from "../assets/img/service/services-21.jpg";
import image22 from "../assets/img/service/services-22.jpg";
import image2 from "../assets/img/service/services-2.jpg";
import image3 from "../assets/img/service/services-3.jpg";
import image32 from "../assets/img/service/services-32.jpg";
import image31 from "../assets/img/service/services-31.jpg";
import image4 from "../assets/img/service/services-4.jpg";
import image41 from "../assets/img/service/services-41.jpg";
import image42 from "../assets/img/service/services-42.jpg";
import image5 from "../assets/img/service/services-5.jpg";
import image6 from "../assets/img/service/services-6.jpg";

const servicesData = [
  {
    id: "CNC Machining",
    icon: <i className="flaticon-it-department"></i>,
    title: "CNC Machining",
    description: "Precision turning, milling, boring, drilling, and threading.",
    number: "1",
    image: image1,
    p1: " CNC (Computer Numerical Control) machining is a subtractive manufacturing process where computer-controlled cutting tools remove material from a workpiece to produce precise shapes and features. It’s widely used for components that demand repeatability, accuracy, tight tolerances and high surface quality — from single prototypes to long production runs. Modern CNC shops combine advanced machine tools, tooling systems, fixtures and inspection procedures to deliver parts that meet mechanical, dimensional and surface-finish specifications.",
    h4: "Why choose CNC machining?",
    whyChoose: [
      "High dimensional accuracy and repeatability",
      "Ability to machine complex geometries (multi-axis, contours, pockets)",
      "Excellent material versatility: ferrous, non-ferrous, plastics, superalloys",
      "Fast turnaround from prototype to production",
      "Tight control of tolerances and finishes",
    ],
    image2: image11,
    image3: image12,
    coreProcesses: [
      "External turning and internal diameter (ID) turning",
      "Facing and contour turning (complex profiles and multi-step diameters)",
      "Boring up to 1050 mm height",
      "Deep grooving and parting",
      "External/internal threading (single- and multi-start threads)",
      "Taper turning and step turning",
      "Drill/holemaking with live tooling or turret attachments",
    ],
    performance: [
      "Repeatable diametral tolerances: ±0.05 mm (dependent on part size, material and finish)",
      "Surface finishes achievable: Ra 0.8–3.2 μm (post-process polishing improves further)",
      "Maximum workpiece diameter: Ø1250 mm; maximum height: 1050 mm",
    ],
    precisionServices: [
      {
        title: "1. CNC Vertical Lathe",
        description:
          "A purpose-built vertical turning lathe (VTL) for large-diameter, heavy or awkward parts that are difficult to handle on horizontal lathes. The vertical orientation supports the workpiece on a chuck/table and rotates it under a stationary cross rail and turret, delivering stable cutting for heavy machining.",
        coreProcesses: [
          "External turning and internal diameter (ID) turning",
          "Facing and contour turning (complex profiles and multi-step diameters)",
          "Boring up to 1050 mm height",
          "Deep grooving and parting",
          "External/internal threading (single- and multi-start threads)",
          "Taper turning and step turning",
          "Drill/holemaking with live tooling or turret attachments",
        ],
        performance: [
          "Repeatable diametral tolerances: ±0.05 mm (dependent on part size, material and finish)",
          "Surface finishes achievable: Ra 0.8–3.2 μm (post-process polishing improves further)",
          "Maximum workpiece diameter: Ø1250 mm; maximum height: 1050 mm",
        ],
      },
      {
        title: "2. CNC Milling",
        description:
          "A versatile, rigid milling center designed to machine medium-to-large workpieces with tight form control. Ideal for complex shapes, cavities, precision holes, bosses, pockets and 3D surfaces.",
        coreProcesses: [
          "Face milling, contour and 3D surface milling",
          "Drilling, reaming, boring & precision holemaking",
          "Tapping and thread milling",
          "Pocketing and cavity creation",
          "Slotting and keyway cutting",
          "Chamfering, deburring & finishing passes",
          "Multi-tool setups for reduced cycle time",
        ],
        performance: [
          "Dimensional tolerances: ±0.02–0.05 mm (depends on feature and setup)",
          "Positional accuracy for holes/features: up to ±0.01–0.03 mm with proper fixturing",
          "Surface finishes: Ra 0.4–3.2 μm (after appropriate tooling and feeds)",
        ],
      },
      {
        id: "Wire EDM",

        icon: <i className="flaticon-wire-cutting"></i>,
        title: "Wire EDM Cutting",
        description:
          "Precision electrical discharge machining for hardened metals and intricate geometries.",
        number: "2",
        image: image2,
        p1: "Wire EDM (Electrical Discharge Machining) is a non-contact machining process where a thin, electrically charged wire cuts through conductive materials by means of spark erosion. Unlike conventional cutting, Wire EDM can machine hardened steels, carbides, titanium, and other exotic alloys with exceptional precision. It is particularly suitable for producing complex shapes, sharp internal corners, narrow slots, and tapered features that are difficult or impossible to achieve using traditional machining methods.",
        h4: "Why choose Wire EDM?",
        whyChoose: [
          "Extremely high dimensional accuracy and repeatability",
          "Capable of machining hardened and exotic materials",
          "Ability to cut complex 2D/3D shapes with fine details",
          "Non-contact cutting with no mechanical stress on the part",
          "Mirror-like surface finishes achievable for tooling applications",
        ],

        coreProcesses: [
          "Precision 2D profiling and contour cutting",
          "Taper cutting up to ±30° for stepped or draft features",
          "Sharp internal corners and fine radii",
          "Thin slotting and narrow kerfs",
          "Punch and die set manufacturing",
          "Gear and spline profile machining",
          "Micro-component cutting for electronics and aerospace",
        ],
        performance: [
          "Geometric tolerances: ±0.005–0.02 mm depending on setup and material",
          "Surface finishes: as fine as Ra 0.2–1.6 μm",
          "Minimum kerf width: as small as wire diameter (down to fractions of a mm)",
          "No mechanical forces applied — ideal for delicate or thin components",
        ],
        precisionServices: [
          {
            title: "1. Precision Cutting of Hard Metals",
            description:
              "Wire EDM easily cuts hardened steels, tungsten carbide, titanium, and exotic alloys that are challenging for conventional machining.",
            coreProcesses: [
              "Straight cutting of hardened steels",
              "Contour cutting of tungsten carbide tools",
              "Precision shaping of titanium components",
            ],
            performance: [
              "Dimensional accuracy ±0.01 mm",
              "Ideal for aerospace, defense, and medical parts",
              "Maintains part integrity with no cutting forces",
            ],
          },
          {
            title: "2. Taper Cutting",
            description:
              "With ±30° taper capability, Wire EDM is ideal for producing stepped parts, draft angles, and specialized die components.",
            coreProcesses: [
              "Large-angle taper machining",
              "Progressive stamping tool fabrication",
              "Extrusion die cutting with draft angles",
            ],
            performance: [
              "Consistent taper angles up to ±30°",
              "Maintains tight tolerances across full part height",
              "Cost-effective for complex tooling shapes",
            ],
          },
          {
            title: "3. Contoured Shapes & Fine Details",
            description:
              "Wire EDM produces complex 2D and 3D contours, narrow slots, and sharp internal features with exceptional precision.",
            coreProcesses: [
              "Profile cutting of gears and splines",
              "Intricate internal cavities",
              "Micro-slotting for electronics and precision tooling",
            ],
            performance: [
              "Kerf widths as fine as wire diameter",
              "Surface finishes Ra 0.2–1.6 μm",
              "High repeatability for batch production",
            ],
          },
          {
            title: "4. Tool & Die Manufacturing",
            description:
              "Wire EDM is widely used for producing high-precision dies, punches, and mold components that require exact matching and fine surface finishes.",
            coreProcesses: [
              "Male and female die set cutting",
              "Punch shaping with sharp corners",
              "Repair and modification of worn dies",
            ],
            performance: [
              "Perfect matching of mating die sets",
              "Reduces lead time for tooling development",
              "High accuracy for long tool life",
            ],
          },
        ],
      },
      {
        title: "4. CNC Flame Cutting",
        description:
          "High-capacity CNC flame/plasma cutting table for fast, economical cutting of thick steel plates. Excellent preparatory stage for heavy fabrication and for producing blanks for downstream machining and welding.",
        coreProcesses: [
          "Thermal cutting of mild and structural steel (thick plates)",
          "Nested cutting for optimized material usage and batch production",
          "Multi-torch setups for high throughput",
          "Preps for plates that will be machined, welded or fabricated",
        ],
        performance: [
          "Max cutting size: 3000 × 2000 mm (table envelope)",
          "Best suited to thick mild steels; for thin or non-ferrous metals laser/plasma preferred",
          "Kerf width & heat-affected zone (HAZ) considerations for post-machining",
        ],
      },
    ],
  },
  {
    id: "Steel Forging",
    icon: <i className="flaticon-project"></i>,
    title: "Steel Forging",
    description:
      "High-strength forged steel components with superior toughness, durability, and performance.",
    number: "2",
    image: image2,
    p1: "Steel forging is a manufacturing process where heated steel is shaped under compressive forces to produce components with refined grain structure and exceptional mechanical properties. Unlike casting or machining, forging aligns the grain flow with the geometry of the part, resulting in greater strength, toughness, and fatigue resistance. Modern forging presses and hammers combined with CNC finishing ensure high precision for both small and large production runs.",
    h4: "Why choose Steel Forging?",
    whyChoose: [
      "Superior strength and toughness compared to casting or machining",
      "Improved fatigue resistance and impact performance",
      "Versatility in forging a wide range of steel grades",
      "Material efficiency with reduced waste",
      "Cost-effective for medium to high production volumes",
    ],
    image2: image21,
    image3: image22,
    coreProcesses: [
      "Open-Die Forging for large blocks, shafts, and rings",
      "Closed-Die Forging for precision and repeatability in high volumes",
      "Hot Forging for high-strength ductile parts",
      "Cold Forging for improved surface finish and accuracy",
      "Upset Forging for rods, axles, and fasteners",
      "Ring Rolling for seamless forged rings",
    ],
    performance: [
      "Typical weight range: from under 1 kg to several tons",
      "Dimensional accuracy: ±0.1–0.3 mm (post-machining achieves tighter)",
      "Surface finishes: As-forged Ra 6.3–12.5 μm; machined Ra 0.8–3.2 μm",
      "Grain flow aligned with part geometry for maximum strength",
    ],
    precisionServices: [
      {
        title: "1. Open-Die Forging",
        description:
          "Ideal for large, heavy-duty components such as shafts, discs, blocks, and rings. Offers flexibility in shape and size with excellent mechanical properties.",
        coreProcesses: [
          "Forging of billets into shafts, bars, or blocks",
          "Upsetting and elongation for length adjustment",
          "Cogging to refine grain structure",
          "Rolling of large rings and discs",
        ],
        performance: [
          "Component weights: up to several tons",
          "Excellent mechanical strength for heavy engineering",
          "Commonly used for energy, marine, and mining industries",
        ],
      },
      {
        title: "2. Closed-Die Forging",
        description:
          "Also known as impression-die forging, this method uses dies to form precise shapes with excellent repeatability. Suitable for automotive, aerospace, and industrial parts.",
        coreProcesses: [
          "Preform and finish die forging",
          "Flash and trimming operations",
          "High-volume production with consistent quality",
        ],
        performance: [
          "Tight dimensional tolerances: ±0.1 mm (after machining ±0.02 mm possible)",
          "Cost-effective for medium and large production runs",
          "Excellent surface finish compared to open-die",
        ],
      },
      {
        title: "3. Hot & Cold Forging",
        description:
          "Hot forging involves heating steel above recrystallization temperature to achieve ductility and strength. Cold forging shapes steel at room temperature for improved accuracy and finish.",
        coreProcesses: [
          "Hot forging for gears, crankshafts, and heavy-duty parts",
          "Cold forging for bolts, fasteners, and precision components",
          "Combination forging processes for complex geometries",
        ],
        performance: [
          "Hot forging: high strength with ductility",
          "Cold forging: superior dimensional accuracy and surface finish",
          "Suitable for automotive, aerospace, and tool industries",
        ],
      },
      {
        title: "4. Ring Rolling",
        description:
          "Specialized forging for seamless rolled rings used in aerospace, energy, and bearing industries. Produces rings with high strength and uniformity.",
        coreProcesses: [
          "Seamless ring rolling from forged preforms",
          "Heat treatment for stress relief and toughness",
          "Machining for precision dimensions",
        ],
        performance: [
          "Ring diameters: up to several meters",
          "Excellent radial and axial grain flow",
          "High strength-to-weight ratio ideal for aerospace and energy",
        ],
      },
    ],
  },
  {
    id: "Wire EDM",
    icon: <i className="flaticon-design-thinking"></i>,
    title: "Wire EDM Cutting",
    description:
      "Precision electrical discharge machining for hardened metals and intricate geometries.",
    number: "2",
    image: image3,
    p1: "Wire EDM (Electrical Discharge Machining) is a non-contact machining process where a thin, electrically charged wire cuts through conductive materials by means of spark erosion. Unlike conventional cutting, Wire EDM can machine hardened steels, carbides, titanium, and other exotic alloys with exceptional precision. It is particularly suitable for producing complex shapes, sharp internal corners, narrow slots, and tapered features that are difficult or impossible to achieve using traditional machining methods.",
    h4: "Why choose Wire EDM?",
    whyChoose: [
      "Extremely high dimensional accuracy and repeatability",
      "Capable of machining hardened and exotic materials",
      "Ability to cut complex 2D/3D shapes with fine details",
      "Non-contact cutting with no mechanical stress on the part",
      "Mirror-like surface finishes achievable for tooling applications",
    ],
    image2: image31,
    image3: image32,
    coreProcesses: [
      "Precision 2D profiling and contour cutting",
      "Taper cutting up to ±30° for stepped or draft features",
      "Sharp internal corners and fine radii",
      "Thin slotting and narrow kerfs",
      "Punch and die set manufacturing",
      "Gear and spline profile machining",
      "Micro-component cutting for electronics and aerospace",
    ],
    performance: [
      "Geometric tolerances: ±0.005–0.02 mm depending on setup and material",
      "Surface finishes: as fine as Ra 0.2–1.6 μm",
      "Minimum kerf width: as small as wire diameter (down to fractions of a mm)",
      "No mechanical forces applied — ideal for delicate or thin components",
    ],
    precisionServices: [
      {
        title: "1. Precision Cutting of Hard Metals",
        description:
          "Wire EDM easily cuts hardened steels, tungsten carbide, titanium, and exotic alloys that are challenging for conventional machining.",
        coreProcesses: [
          "Straight cutting of hardened steels",
          "Contour cutting of tungsten carbide tools",
          "Precision shaping of titanium components",
        ],
        performance: [
          "Dimensional accuracy ±0.01 mm",
          "Ideal for aerospace, defense, and medical parts",
          "Maintains part integrity with no cutting forces",
        ],
      },
      {
        title: "2. Taper Cutting",
        description:
          "With ±30° taper capability, Wire EDM is ideal for producing stepped parts, draft angles, and specialized die components.",
        coreProcesses: [
          "Large-angle taper machining",
          "Progressive stamping tool fabrication",
          "Extrusion die cutting with draft angles",
        ],
        performance: [
          "Consistent taper angles up to ±30°",
          "Maintains tight tolerances across full part height",
          "Cost-effective for complex tooling shapes",
        ],
      },
      {
        title: "3. Contoured Shapes & Fine Details",
        description:
          "Wire EDM produces complex 2D and 3D contours, narrow slots, and sharp internal features with exceptional precision.",
        coreProcesses: [
          "Profile cutting of gears and splines",
          "Intricate internal cavities",
          "Micro-slotting for electronics and precision tooling",
        ],
        performance: [
          "Kerf widths as fine as wire diameter",
          "Surface finishes Ra 0.2–1.6 μm",
          "High repeatability for batch production",
        ],
      },
      {
        title: "4. Tool & Die Manufacturing",
        description:
          "Wire EDM is widely used for producing high-precision dies, punches, and mold components that require exact matching and fine surface finishes.",
        coreProcesses: [
          "Male and female die set cutting",
          "Punch shaping with sharp corners",
          "Repair and modification of worn dies",
        ],
        performance: [
          "Perfect matching of mating die sets",
          "Reduces lead time for tooling development",
          "High accuracy for long tool life",
        ],
      },
    ],
  },
  {
    id: "CNC Flame Cutting",
    icon: <i className="flaticon-data"></i>,
    title: "CNC Flame Cutting",
    description:
      "High-capacity thermal cutting for large steel plates and heavy fabrication projects.",
    number: "3",
    image: image4,
    p1: "CNC Flame Cutting is a thermal cutting process that uses a controlled oxygen-fuel flame to cut through thick steel plates with precision. By integrating computer numerical control (CNC), the process achieves accurate, repeatable cuts on large sheets, making it cost-effective for preparing blanks, structural parts, and heavy-duty components. With a table size of 3000 × 2000 mm, CNC flame cutting is ideal for industrial jobs that require efficiency and durability.",
    h4: "Why choose CNC Flame Cutting?",
    whyChoose: [
      "Capable of cutting very thick steel plates economically",
      "Handles large steel sheets up to 3000 × 2000 mm",
      "Excellent for industrial, structural, and heavy engineering applications",
      "Cost-effective for bulk part production with nesting and multiple torches",
      "Provides reliable preparation for machining, welding, or fabrication",
    ],
    image2: image41,
    image3: image42,
    coreProcesses: [
      "Thermal cutting of mild and structural steel",
      "Precision profiling of large plate components",
      "Nested cutting for optimized material usage",
      "Multi-torch cutting for high throughput",
      "Preparation of blanks for downstream machining or welding",
    ],
    performance: [
      "Max cutting size: 3000 × 2000 mm (table envelope)",
      "Best suited for thick mild steels (carbon and structural steels)",
      "Kerf width and heat-affected zone (HAZ) considerations for post-machining",
      "Tolerances typically ±1–3 mm depending on thickness and setup",
    ],
    precisionServices: [
      {
        title: "1. Large Plate Cutting",
        description:
          "Efficient cutting of steel sheets up to 3 meters long and 2 meters wide for heavy industry applications.",
        coreProcesses: [
          "Flat plate cutting for construction and machinery",
          "Straight cuts, profiles, and complex patterns",
          "Bulk part preparation with nesting software",
        ],
        performance: [
          "Plate sizes up to 3000 × 2000 mm",
          "Supports thicknesses from medium to very heavy",
          "Ideal for shipbuilding, construction, and fabrication",
        ],
      },
      {
        title: "2. Thick Steel Cutting",
        description:
          "Flame cutting is highly effective for very thick steel sections that other cutting methods cannot handle economically.",
        coreProcesses: [
          "Cutting of structural beams and base plates",
          "Preparation of blanks for machining or welding",
          "Heavy-duty components for industrial equipment",
        ],
        performance: [
          "Cost-effective for thicknesses beyond plasma/laser limits",
          "HAZ managed for machining or welding afterward",
          "High productivity with multiple torch setups",
        ],
      },
      {
        title: "3. Nested & Batch Production",
        description:
          "CNC nesting software optimizes layouts to minimize waste and maximize throughput in batch production.",
        coreProcesses: [
          "Multi-part layouts on a single plate",
          "Automated cutting paths for repeatable accuracy",
          "Batch cutting for high-volume orders",
        ],
        performance: [
          "Reduced material wastage",
          "Shorter lead times for multiple identical parts",
          "Excellent efficiency for large projects",
        ],
      },
      {
        title: "4. Fabrication Preparation",
        description:
          "Flame cutting provides the first stage of fabrication by producing blanks and semi-finished parts ready for further machining, welding, or assembly.",
        coreProcesses: [
          "Blank preparation for CNC machining",
          "Edge preparation for welding processes",
          "Cutting profiles for structural steel frameworks",
        ],
        performance: [
          "Provides rough-cut blanks for machining tolerance",
          "Edge conditions suitable for weld preparation",
          "Reduces downstream processing time",
        ],
      },
    ],
  },

  //   {
  //     id: "foundation-repair",
  //     icon: <i className="flaticon-wrench-1"></i>,
  //     title: "Foundation Repair",
  //     description: "Our team of seasoned consultants collaborates closely",
  //     number: "5",
  //     image: image5,
  //   },
  //   {
  //     id: "construction-planning",
  //     icon: <i className="flaticon-idea-1"></i>,
  //     title: "Construction Planning",
  //     description:
  //       "This can involve orientation for new hires, skill development,",
  //     number: "6",
  //     image: image6,
  //   },
];

export default servicesData;
