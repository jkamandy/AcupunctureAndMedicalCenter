import React, { useState, useEffect, useRef } from "react"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sheila A.",
    role: "Product Designer",
    company: "TechFlow",
    avatar: "/placeholder.svg",
    content:
      "Dr G has been amazing with helping my neck issues. This is my first experience with Acupuncture and highly recommend for anyone in search of Eastern Medicine. Highly recommend his services.",
    rating: 5,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
  {
    id: 2,
    name: "Becky W.",
    role: "CEO",
    company: "StartupLab",
    avatar: "/placeholder.svg",
    content: "Dr G informative, compassionate, knowledgeable and kind. I highly recommend. He has helped me with anxiety and hormonal issues tied to menopause.",
    rating: 5,
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: 3,
    name: "Lauren C.",
    role: "Marketing Director",
    company: "GrowthCo",
    avatar: "/placeholder.svg",
    content:
      "Wow, can't believe it took me so long to get here. Dr. G was so patient and kind and so knowledgeable. Discussed every single issue and determined where we should focus first. Easy scheduling and check in. Clean office. Can't wait to be going every week!",
    rating: 5,
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    id: 4,
    name: "Lisset M.",
    role: "CTO",
    company: "InnovateTech",
    avatar: "/placeholder.svg",
    content: `Wow I seriously can't wait to go back
    This guy is the real deal. He's very professional , truly a compassionate listener and knows how to get to the bottom of your personal needs in order to treat your health. Go here, you will feel better after the first visit.
    I have been doing to acupuncture for over 20 years and he's my fave. I have several autoimmune disorders - Lyme , Hashimotos, EPV and he is very knowledgable in this area. I'm new to the area so I'm so grateful to have found this wonderful Dr !! Yay!!`,
    rating: 4,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
  {
    id: 5,
    name: "Nina P.",
    role: "Operations Manager",
    company: "EfficiencyFirst",
    avatar: "/placeholder.svg",
    content:
      `Dr. Ghaffarian is an incredibly skilled and knowledgeable practitioner. I have been to countless other acupuncturists before coming to see Dr.G and none of them could equate! Not only does Dr. G actually take the time to listen to every single one of my symptoms and concerns, but he also deeply cares about my health and wellbeing. I find that this is extremely rare among medical practitioners so he is unique in this way. His attention to detail and radiant kindness allows me to feel relief knowing that I will be under his care. Only four sessions in and I can already feel a change in my body that I had not been able to achieve with any other acupuncturist! My mood and fatigue have begun changing and I am hopeful that the rest of my symptoms of chronic fatigue and auto-immunity will soon resolve.

      Also, for any of you that are scared of needles, under Dr. G you won't feel a thing! The effortless nature in which he needles is as light as a feather but at the same time packs a strong punch! I am beyond grateful to have found Dr. G and have already made appointments for my entire family to come and see him!`,
    rating: 5,
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    id: 6,
    name: "Kylie N.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `After recurrent miscarriages, I was in a very tough place when I first came to see Dr. G. I can't thank him enough for how he listened, explained and treated me throughout my time seeing him. Dr. G genuinely cared about our situation; he was always available when I needed a treatment and made every effort to support my husband and I. We now have a beautiful 10 month old daughter and I am eternally grateful. I have recommended and will continue to recommend Dr. G to anyone dealing with fertility issues.`,
    rating: 5,
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    id: 7,
    name: "Dan C.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `Dr. G is absolutely the most caring and heartfelt individual that I have ever met in the medical industry throughout the years. If you want The Cutting Edge in acupuncture he's absolutely the best. I have known Dr. G for over 14 years
    and I have worked in Special Enforcement for the last 29 years. My job is very physical and not to mention the extra 40 pounds of equipment that I carry on my body daily. It definitely puts a toll on my body and lower back. So from time to time throughout the years my lower back goes out on me. So I immediately call Dr. G and he always schedules me in immediately. That's service with care that's for sure. Everytime I visit Dr. G at his office he treats me like if I was family.
    
    Then Dr. G tells me to relax and then he works his Magic and I leave he's office feeling really good. This is no joke seriously buy the next day or the following day I'm cured. Thank you Dr. G for all the years of such great care especially when I've needed you the most. Also thank you for always taking care of my family as well.
    
    D. Chong`,
    rating: 5,
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: 8,
    name: "Lafayette Pierre W.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `Dr. Ghaffarian is an incredible acupuncturist and healer. Having been to a few other TCM practitioners and acupuncturists, Dr. G is a level above the others in not only his treatment plans but also in how he listens and cares for each and every one of his patients! Having seen Dr. G for a few treatments now, this kindness and care definitely translates directly into his treatments, as I am already seeing improvements and changes in my day-to-day energy and overall feel. Dr. G is also extremely encouraging and loves to educate his patients throughout the entire process of healing. His treatment plans also include food/dietary education, lifestyle changes, and physical exercises which all come to complete the overall treatment set out by Dr. G.

    Overall, Dr. Ghaffarian is an extremely unique healer among not only acupuncturists but all practitioners. I consider myself extremely lucky to have found and begun being treated by Dr. G!`,
    rating: 5,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
  {
    id: 9,
    name: "Neshat K.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `I have been having numerous GI issues for years with lots of stomach pain and digestive problems from my hiatal hernia and gallbladder removal. Upon my first consultation with Dr. Ghaffarian he listened to all my symptoms mindfully and already devised a treatment plan!
    With each treatment I feel that we are progressing. Dr. G is exceptionally precise and wholeheartedly cares about my progress and overall health. We all look forward to our appointments each week, his office is exceptionally clean and has a very relaxing atmosphere.
    
    He is a blessing to have as a physician and my kid's health have also been improving under his care. Each visit he goes above and beyond, giving us dietary advice, moral support, and encourages lifestyle changes that can better our health. I have already recommended him to all of my nearest friends and family!`,
    rating: 5,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
  {
    id: 10,
    name: "Jenn S.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `Great first appointment!!! Dr. G is a very good listener and very tuned in. I have a very rare neurological condition and he not only knew what it was, but had treated it before. He's very kind, patient and knowledgeable about the body. The office is clean and serene. On the way home, I noticed my upper back and neck felt so much more relaxed and fluid. I'll definitely continue to come here. Highly recommend!`,
    rating: 5,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
  {
    id: 11,
    name: "Karen S.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `I had my first appointment with Dr. G this week. I'm usually very nervous when I go to the doctor-especially the first time- however I was very relaxed and at ease with Dr. G. It was so nice to be listened to & heard and not have my symptoms dismissed as a natural part of life (menopause). I'm confident Dr G can help me manage my symptoms.    `,
    rating: 5,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
  {
    id: 12,
    name: "Ami S.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `I found Dr. G. last fall through a YELP review and went to see him for a number of sessions over a period of a few months. He was very kind and extremely thorough in discussing my condition and my treatment, and I felt very relaxed after each session. I experienced quite a bit of progress after I completed the series and felt much better by Christmas time. I highly recommend Dr. G. to anyone who needs acupuncture treatment.`,
    rating: 5,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
  {
    id: 13,
    name: "Melissa S.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `Dr.G has been such a helpful guide and support. He is always caring, thorough and takes the time to provide the best care. So thankful we found him!`,
    rating: 5,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
  {
    id: 14,
    name: "Bri B.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `This review is long, long overdue. I have been seeing Dr. Ghaffarian for about 15 years. He has treated me for everything from migraine headaches, to dance-related injuries, to injuries I sustained as the result of a car accident. His therapy has been instrumental to my healing processes and pain management. Dr. G is kind, genuine, thorough, and extraordinarily knowledgeable. I have consulted with Dr. G on all of my health issues for the last 15 years and will continue to do so for as long as he is practicing.

    I have also visited Anni at Acupuncture Medical Center for massage therapy. I have found her work to be a great compliment to my acupuncture treatments. She, too, is warm, welcoming, thorough, and effective.
    
    Acupuncture Medical Center is clean, beautiful, and comfortable, and the people you'll find there are absolutely lovely and great at what they do.`,
    rating: 5,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
  {
    id: 15,
    name: "Jibo N.",
    role: "Freelancer",
    company: "Independent",
    avatar: "/placeholder.svg",
    content: `Extent staff great service and excellent results. I have been to AMC for various treatment and have had excellent results every time. For my back, ankle, knee and even for a relaxing massage.`,
    rating: 5,
    gradient: "from-teal-500/10 to-blue-500/10",
  },
]

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
    />
  ))
}

const Masonry = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedCards, setExpandedCards] = useState({})

  const toggleExpanded = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* <div className="flex justify-center items-center w-full py-20 bg-black">
        <h1 className="text-white text-[72px] md:text-[112px] lg:text-[152px] opacity-70 font-spartan font-medium uppercase tracking-[-10px] leading-none">
          Testimonials
        </h1>
      </div> */}

      <div className="w-full max-w-7xl mx-auto p-6">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div> */}

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-10">
          {testimonials.map((t) => {
            const isExpanded = expandedCards[t.id] || false
            return (
            <div
              key={t.id}
              className={`break-inside-avoid bg-gradient-to-br ${t.gradient} rounded-xl p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-gray-400 group-hover:text-[#D6D6D6] transition-colors" />
                {/* <div className="flex gap-1">{renderStars(t.rating)}</div> */}
              </div>

              <div className={`relative ${!isExpanded ? "max-h-32 overflow-hidden" : ""} mb-6`}>
                <blockquote className="text-gray-400 group-hover:text-[#D6D6D6] font-spartan leading-relaxed">"{t.content}"</blockquote>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 w-full h-10  pointer-events-none" />
                )}
              </div>

              {t.content.length > 200 && (
              <button
                className="text-sm text-gray-400 hover:text-[#D6D6D6] hover:underline mb-4 font-spartan"
                onClick={() => toggleExpanded(t.id)}
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            )}


              {/* <blockquote className="text-gray-400 mb-6 hover:text-[#D6D6D6] leading-relaxed">"{t.content}"</blockquote> */}

              <div className="flex items-center gap-3">
                {/* <img
                  // src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full ring-2 ring-white shadow-md object-cover"
                /> */}
                <div>
                  <div className="font-semibold text-gray-500 font-spartan">{t.name}</div>
                  {/* <div className="text-sm text-gray-600">
                    {t.role} at {t.company}
                  </div> */}
                </div>
              </div>
            </div>
          )})}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            {/* <div className="flex gap-1">{renderStars(5)}</div> */}
            {/* <span>Trusted by 10,000+ customers worldwide</span> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Masonry
