import React, { useState, useRef, useEffect } from "react";
import SidePanel from "./SidePanel";
import CardContent from "./CardContent";

const UpperCard = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef([]);

  const content = [
    {
      tabName: "About Me",
      content:
        "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...",
    },
    {
      tabName: "Experiences",
      content:
        "I would recommend the following products to you based on your previous purchases:1. Salesforce CRM Salesforce CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.2. HubSpot CRM: HubSpot CRM is a free customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.3. Zoho CRM Zoho CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.",
    },
    {
      tabName: "Recommended",
      content:
        "I would recommend the following products to you based on your previous purchases:1. Salesforce CRM Salesforce CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.2. HubSpot CRM: HubSpot CRM is a free customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.3. Zoho CRM Zoho CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.",
    },
  ];

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="w-[720px] h-[316px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
      <div className="flex items-center justify-center gap-2 mr-2">
        <SidePanel />
        <CardContent>
          <div className="w-full flex flex-col justify-center gap-y-8">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[614px] h-[62px] rounded-[23px] bg-[#171717] shadow-custom-inset text-white text-[18px] font-medium flex justify-center items-center gap-2 relative">
                <span
                  className="absolute block h-[49px] bg-[#28292f] rounded-[20px] transition-all duration-300"
                  style={{
                    left: tabUnderlineLeft,
                    width: tabUnderlineWidth,
                  }}
                />
                {content.map((tab, index) => (
                  <button
                    key={index}
                    className={`flex-1 h-[49px] rounded-[16px] px-3 py-2 mx-1 z-0 transition-all duration-200 text-center font-['Poppins'] leading-[16.12px] ${
                      activeTabIndex === index
                        ? "text-white shadow-md"
                        : "hover:bg-[#28292f] hover:shadow-md text-[#A3ADB2]"
                    }`}
                    onClick={() => setActiveTabIndex(index)}
                    ref={(el) => (tabsRef.current[index] = el)}
                  >
                    {tab.tabName}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[611px] h-[175px] font-['Plus_Jakarta_Sans'] text-[20px] font-normal text-left text-[#969696] leading-[25.2px] mt-2 overflow-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 overflow-x-hidden">
              {content[activeTabIndex].content}
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default UpperCard;
