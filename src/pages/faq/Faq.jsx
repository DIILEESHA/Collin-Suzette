import React, { useState } from "react";
import "./faq.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "Top Attractions",
      questions: [
        {
          question: "Buckingham Palace",
          answer: "See the iconic Changing of the Guard and snap a photo outside the royal residence."
        },
        {
          question: "Tower of London & Tower Bridge",
          answer: "Dive into British history with a visit to the home of the Crown Jewels."
        },
        {
          question: "Big Ben & Westminster Abbey",
          answer: "Two landmarks that define London's skyline and history."
        },
        {
          question: "The London Eye",
          answer: "Get breathtaking panoramic views of the city from the giant Ferris wheel on the South Bank."
        }
      ]
    },
    {
      category: "Cultural Gems",
      questions: [
        {
          question: "The British Museum",
          answer: "Home to ancient treasures like the Rosetta Stone. And it's free!"
        },
        {
          question: "Tate Modern or National Gallery",
          answer: "Art lovers will adore London's world-class galleries."
        },
        {
          question: "Shakespeare's Globe Theatre",
          answer: "Catch a performance or take a guided tour."
        }
      ]
    },
    {
      category: "Charming Neighborhoods to Explore",
      questions: [
        {
          question: "Covent Garden",
          answer: "Bustling with street performers, shops, and restaurants."
        },
        {
          question: "Notting Hill",
          answer: "Famous for its colorful houses, Portobello Market, and charming vibe."
        },
        {
          question: "Camden Market",
          answer: "Trendy, edgy, and full of food stalls and quirky shops."
        },
        {
          question: "Greenwich",
          answer: "Take a boat ride down the Thames and stand on the Prime Meridian!"
        }
      ]
    },
    {
      category: "Shopping Spots",
      questions: [
        {
          question: "Oxford Street & Regent Street",
          answer: "Major brands and flagship stores."
        },
        {
          question: "Harrods & Selfridges",
          answer: "Iconic department stores if you're in the mood to splurge."
        },
        {
          question: "Borough Market",
          answer: "A foodie's paradise with gourmet treats and international flavors."
        }
      ]
    },
    {
      category: "Relax & Unwind",
      questions: [
        {
          question: "Hyde Park or St. James's Park",
          answer: "Perfect for a walk or picnic."
        },
        {
          question: "Afternoon Tea",
          answer: "Treat yourself at The Ritz, Fortnum & Mason, or Sketch."
        },
        {
          question: "Thames River Cruise",
          answer: "A relaxing way to see the city from the water."
        }
      ]
    },
    {
      category: "For the Night Owls",
      questions: [
        {
          question: "West End Theatre Shows",
          answer: "Catch a musical like The Lion King, Hamilton, or Wicked."
        },
        {
          question: "London's Pub Scene",
          answer: "Grab a pint at a historic pub like The Churchill Arms or Ye Olde Cheshire Cheese."
        }
      ]
    },
    {
      category: "Bonus Tip",
      questions: [
        {
          question: "Transportation Tip",
          answer: "Don't forget to grab an Oyster Card or use a contactless card for easy travel around the city via the Tube and buses."
        }
      ]
    }
  ];

  return (
    <div className="faq_container">
      <div className="faq_cover">
        <h2 className="faq_title">Things to Do in London While You're Here</h2>
      </div>
       
      <div className="faq_card_section">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="faq_category">
            <h3 className="faq_category_title">{category.category}</h3>
            {category.questions.map((faq, index) => (
              <div className="faq_sub_card" key={`${catIndex}-${index}`}>
                <div
                  className="faq_top"
                  onClick={() => toggleAccordion(`${catIndex}-${index}`)}
                >
                  <div className="faq_top_t">
                    <h2 className="faq_qs">{faq.question}</h2>
                  </div>
                  <div className="faq_top_t">
                    {activeIndex === `${catIndex}-${index}` ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}
                  </div>
                </div>

                <div className="line"></div>
                {activeIndex === `${catIndex}-${index}` && (
                  <div className="faq_ans">
                    <div className="faq_ans_p">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;