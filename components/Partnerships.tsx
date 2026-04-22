export default function Partnerships() {
  const partners = [
    { name: "Reliance", logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png", height: "h-24" },
    { name: "HCL", logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png", height: "h-24" },
    { name: "IBM", logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png", height: "h-20" },
    { name: "CRIF", logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png", height: "h-16" },
    { name: "ADP", logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg", height: "h-12" },
    { name: "BAYER", logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg", height: "h-16" }
  ];

  return (
    <section id="clients" className="py-20 bg-white text-center">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[32px] sm:text-[42px] font-bold text-gray-900 mb-2 tracking-tight">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>
        <p className="text-gray-500 font-medium mb-14 text-[15px]">
          Successful Collaborations With the <span className="text-blue-500">Industry's Best</span>
        </p>

        <div className="bg-white rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.05)] border border-gray-100 py-12 px-10">
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center grayscale-10 opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`${partner.height} w-auto object-contain mix-blend-multiply`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
