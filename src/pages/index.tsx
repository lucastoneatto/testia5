import Head from "next/head";
import { AboutSection } from "@/components/AboutSection";
import { CallToActionBlock } from "@/components/CallToActionBlock";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialSection } from "@/components/TestimonialSection";
export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <>
        <HeroSection
          t1="Automating the Future with n8n & AI"
          t2="Specialized freelance automation solutions tailored for your needs."
          t3="Get Started"
        />
        <AboutSection
          t1="About Me"
          t2="I am a freelance specialist in automation technologies, with a focus on n8n and AI-driven solutions. My mission is to streamline your workflows."
        />
        <FeaturesGrid
          t1="My Services"
          t2="Custom Automation Workflows"
          t3="Designing tailored automation workflows that improve efficiency."
          t4="Consultation on AI Tools"
          t5="Expert advice on integrating the right AI tools for maximum impact."
          t6="Ongoing Support"
          t7="Providing continuous support and maintenance for your automation setups."
        />
        <TestimonialSection
          t1="What My Clients Say"
          t2='"Working with you has transformed our operational efficiency!"'
          t3="- Client Name"
          t4='"Your expertise in n8n was a game changer for us."'
          t5="- Another Client"
        />
        <CallToActionBlock
          t1="Ready to Automate?"
          t2="Let’s work together to streamline your processes."
          t3="Contact Me"
        />
        <FooterSection t1="© 2023 Your Name. All rights reserved." />
      </>
    </>
  );
}
