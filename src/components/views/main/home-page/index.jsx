
import Banner from "./Banner";
import ClassesSection from "./ClassesSection";
import CoursesSection from "./CoursesSection";
import JoinSection from "./JoinSection";
import MentorSection from "./MentorSection";

const HomePageTemplate = () => {
  return (
    <main className="container">
      <Banner />
      <ClassesSection />
      <CoursesSection />
      <JoinSection />
      <MentorSection />
    </main>
  );
};

export default HomePageTemplate;
