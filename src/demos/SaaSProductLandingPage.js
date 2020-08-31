import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "../images/guzenje.JPG";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import Banner from '../components/Banner'

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  const linkToPage = "http://www.facebook.com"

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} linkToPage={linkToPage}/>
     
      <Banner linkToPage={linkToPage}/>
      <MainFeature
        subheading={<Subheading>Bare sex, sex, sex</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
        linkToPage={linkToPage}
      />
      <FeatureWithSteps
        subheading={<Subheading></Subheading>}
        heading={
          <>
            Fremgangsmåte:
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <Banner linkToPage={linkToPage}/>
      <MainFeature2
      linkToPage={linkToPage}
        subheading={<Subheading>En villmark av sex</Subheading>}
        heading={
          <>
            Hva venter du på? 
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Gratis registrering",
            description: "Enten du vil ha en affære eller en one night stand, kan vi alltid hjelpe deg å ta det riktige valget.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Perfekt partner",
            description: "Hva venter du på? La oss ta kontakt for å finne den perfekte partneren for deg nå!",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />

      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Hva sier en norsk pornostjerne om <HighlightedText>online dating?</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "",
            quote:
              "Jeg har egentlig ikke tid til å møte menn i barer, og jeg vil ikke blande meg med noen fra jobben. Derfor prøvde jeg nettdating. Jeg fant mange partnere på dette nettstedet, for normal- og for fetisjsex, det er noe for alle! ",
            customerName: "",
            customerTitle: ""
          }
        ]}
      />
       <Features
        subheading={<Subheading>Er du…</Subheading>}
        heading={
          <>
            Den typen som ikke er fornøyd med å kun se på <HighlightedText>porno?</HighlightedText>
          </>
        }
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            Har du <HighlightedText>spørsmål?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Chatter jeg med en eller så mange medlemmer som mulig?",
            answer:
              "Det er opp til deg, men tenk på det på denne måten: du er her fordi du vil knulle, sannsynligvis noen sexy (eller ikke, vi dømmer ikke). Sjansene for å knulle øker når du snakker med flere medlemmer!"
          },
          {
            question: "Er det falske profiler?",
            answer:
              "Et par falske profiler er uunngåelig, men vi prøver å holde det til et minimum. Nettstedet vårt har utmerkede registreringsfiltre, og vi oppgraderer dem kontinuerlig."
          }
        ]}
      />
      <GetStarted linkToPage={linkToPage}/>
      <Footer />
    </AnimationRevealPage>
  );
}
