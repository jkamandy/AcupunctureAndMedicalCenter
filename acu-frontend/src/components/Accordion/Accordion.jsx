import React, { useState, useEffect, useRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import AccordionItem from './AccordionItem';
import './styles.css';

const AppAccordion = ({}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }, // Animation triggers when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`flex w-[85%] items-center justify-center transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <Accordion.Root type="single" collapsible className="z-10 w-full">
        <AccordionItem value="item1" header="How does acupuncture work?">
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              Several processes have been proposed to explain acupuncture’s
              effects, primarily on pain. Acupuncture points are believed to
              stimulate the central nervous system (the brain and spinal cord)
              to release chemicals into the muscles, spinal cord, and brain.
              These chemicals either change the experience of pain or release
              other chemicals, such as pain killers, anti-inflammatory, muscle
              relaxers, hormones, that influence the body’s self-regulating
              systems. The biochemical changes may stimulate the body’s natural
              healing abilities and promote physical and emotional well being.{' '}
            </span>
            <span>
              There are three main course of action. Conduction o f
              electromagnetic signals: Western scientist have found evidence
              that acupuncture points are strategic conductors of
              electromagnetic signals. Stimulating points along these pathways
              enables electromagnetic signals to be relayed at a greater rate
              than under normal conditions. these signals may start the flow of
              pain killing biochemicals, such as endorphins, and immune
              enhancing system cells to specific sites in the body, which are
              injured or are vulnerable to disease.
            </span>
            <span>
              Activation of Opiod systems: Researchers has found that several
              types of opioids may be released into the central nervous system
              during acupuncture treatment, thereby, reducing pain.{' '}
            </span>
            <span>
              Change in the brain chemistry, sensation, and involuntary body
              functions: studies have shown that acupuncture may alter brain
              chemistry by changing the release of neurotransmitters and
              nero-hormones. Acupuncture has laso been documented to affect the
              parts of the central nervous system related to sensation and
              involuntary body function, such as immune reactions and processes,
              whereby, blood pressure, blood flow, and body temperature are
              regulated.
            </span>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item2"
          header="What can acupuncture help with? "
          className="mt-3"
        >
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              Many promising results have emerged. Currently, one of the main
              reasons that most people seek acupuncture treatments is for
              chronic pain, especially from conditions such as arthritis, lower
              back, mid back, neck, and knee pain. For example, acupuncture has
              proven effective in reducing adult postoperative and chemotherapy
              related nausea and vomiting as well as postopreative dental pain.
              There are situations such as headache, menopause, menstrual
              cramps, tennis elbow, fibromyalgia, myofascial pain,
              osteoarthritis, carpal tunnel syndrome, addiction, stroke
              rehabilitation,and asthma, for which acupuncture may be useful as
              an adjunct treatment, as acceptable alternative, or included in
              comprehensive management programs.
            </span>
            <span>
              Increasingly, acupuncture is complementing conventional therapies.
              For example, doctors may combine acupuncture and drugs to control
              surgery related pain in their patients. Some doctors have found it
              possible to achive a state of complete pain relief for some
              patients by providing both acupuncture and certain conventional
              anesthetic drugs.
            </span>
            <span>
              They also have found that using acupuncture lowers the need for
              conventional pain killing drugs, therapy, reducing the risk of
              side effects that accompany the use of certain drugs.{' '}
            </span>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item3"
          header="What conditions can acupuncture and herbal medicine treat?"
        >
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              Acupuncture and herbal medicine can effectively treat a wide range
              of conditions, including:
            </span>
            <ol>
              <li className="ml-3">
                • Pain: Back pain, neck pain, shoulder pain, knee pain,
                arthritis, sports injuries, herniated discs, sciatica, and more.
              </li>
              <li className="ml-3">
                • Fibromyalgia: Symptoms such as fatigue, muscle pain, and soft
                tissue inflammation.
              </li>
              <li className="ml-3">
                • Stress & Anxiety: Acupuncture can help manage stress, anxiety,
                and its associated health issues.
              </li>
              <li className="ml-3">
                • Women’s Health: Conditions like hot flashes, irregular cycles,
                PMS, menopause, and more.
              </li>
              <li className="ml-3">
                • Infertility: Supports pregnancy and assisted reproduction
                therapy.
              </li>
              <li className="ml-3">
                • Other Disorders: Allergies, respiratory issues (like asthma
                and bronchitis), digestive problems, skin disorders, emotional
                imbalances, and more.
              </li>
            </ol>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item4"
          header="How can acupuncture help with pain management?"
          className="mt-3"
        >
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              Acupuncture helps manage various types of pain, including back,
              neck, shoulder, and knee pain, as well as arthritis, sciatica,
              muscle tears, and nerve issues. It works by stimulating specific
              points on the body to promote healing, reduce inflammation, and
              increase circulation, which can help relieve pain and improve
              mobility.
            </span>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item5"
          header="Can acupuncture help with emotional and psychological health issues?"
          className="mt-3"
        >
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              Yes, acupuncture is often used to treat emotional and
              psychological conditions like anxiety, depression, insomnia, and
              panic attacks. It helps by promoting relaxation, balancing the
              body’s energy, and reducing stress hormones, leading to emotional
              stability and better mental health.
            </span>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item6"
          header="What to expect after a treatment?"
          className="mt-3"
        >
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              One may experiance an immediate total or partial relief of pain or
              other sysmptoms. This relief may be permanent or may last for some
              time. In some cases the pain may feel worse. This is called
              "rebound effect", by the next day the pain can be expected to
              gradually improve. Often the most dramatic results are experiance
              in the first treatment. However, one should see further
              improvement after each subsequent session. We recommend that you
              experiance a minimum of six sessions.
            </span>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item7"
          header="What is herbal therapy?"
          className="mt-3"
        >
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              For over three thousand years, healers has recognized the
              theraputic value of herbs. Herbal therapy has traditionally been
              the treatment of choice for royalty. Today, the use of herbal
              remedies is increasingly widespread. Modern herbal therapists
              prescribe herbal remedies for a number of common illnesses with
              great success. Herbal therapy is natural, safe and effective.
              However, in order to achive maximum results it is imperative that
              the strictest standard be observed in the medicinal application of
              herbs. the quality of herbal remedies and formula for specific
              ailment very widely. Our expert therapist will carefully assess
              your physical need to determine appropriate herbal treatment
              protocols. then using only the highest quality herbs, our
              therapist will personally tailor a program for your physical
              needs.
            </span>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item8"
          header="How does massage therapy work?"
          className="mt-3"
        >
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              The stressful influences of everyday life can have serious health
              consequences. It is imperative that individuals learn to relax and
              release stress in order to maintain good health. Our massage
              therapist use their unique skills to reduce tension, enhance
              circulation and activate sensory receptors in the body. This
              therapy allows you to relax and prepare yourself to cope with the
              stress of everyday life.
            </span>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item9"
          header="Is acupuncture covered by insurance?"
          className="mt-3"
        >
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              Our staff is trained to verify and obtain pre-authorizations for
              your therapy. Most insurance companies cover acupuncture therapy.
              Upon your visit a member of our staff will verify your benefits
              and its limitations for you prior to your therapy. Currently we
              accept workers compensation, personal / auto injury, cash, and PPO
              private insurance. In addition, our staff will be happy to process
              your insurance claims for you. For those patients with out health
              insurance or non coverage of acupuncture therapy by your insurance
              carrier, we have a varity of payment programs available for your
              needs. We have our own Supplemental Wellness Plan that gives our
              clients unlimited acupuncture, massage and chiropractic care.
              please contact us for more information.
            </span>
          </div>
        </AccordionItem>
        <AccordionItem
          value="item10"
          header="Does acupuncture hurt?"
          className="mt-3"
        >
          <div className="flex flex-col [&_span:not(:first-of-type)]:mt-5">
            <span>
              Acupunture is the most non-invasive modalatiy in health care
              industry. Acupuncture is safe and painless. However, we are
              penetrating the skin, therefore, one may feel a little prik, but
              nothing like getting an injection. Infact, most patients don't
              feel a thing and at some time durring the session most people fall
              a sleep. Acupuncture, in general, causes the body to produce
              endorphines. endorphins are chemicals released by the body that
              makes an individual feel relaxed and pain free.
            </span>
          </div>
        </AccordionItem>
      </Accordion.Root>
    </div>
  );
};

export default AppAccordion;

// import * as Accordion from '@radix-ui/react-accordion';
// import AccordionItem from './AccordionItem';
// import { IoChevronDownSharp } from "react-icons/io5";
// import "./styles.css";

// const AppAccordion = () => (
// <div className='flex items-center justify-center w-[70%] z-10'>
// <Accordion.Root type="single" collapsible>
// 		<Accordion.Item value="item-1 text-white">
// 			<Accordion.Header>
// 				<Accordion.Trigger className="AccordionTrigger">
// 					<span>Trigger text</span>
// 					<IoChevronDownSharp className="AccordionChevron" aria-hidden />
// 				</Accordion.Trigger>
// 			</Accordion.Header>
// 			<Accordion.Content className="AccordionContent">…</Accordion.Content>
// 		</Accordion.Item>
// 	</Accordion.Root>
//   </div>
// );

// export default AppAccordion;
