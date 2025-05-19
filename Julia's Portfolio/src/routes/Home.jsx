import Header from "../components/Header";
import "../styles/Home.css"

export default function Home() {
  return (
    <>
      <Header />
      <p className="bio">
        After co-founding Gearbox Girls, a nonprofit geared towards building community for underrepresented people in engineering, Julia Rieger has never stopped seeking ways to leverage technology as a tool for education, social justice, and building community. Julia is a creative technologist from Houston, Texas (Hook ’em!) and currently based in Philadelphia, PA. A lifelong music enthusiast, Julia has always approached life and work with an artistic mindset.
      </p>
      <p className="bio">
        Julia’s career goals focus on the intersection of computer graphics, visual effects, and human-computer interaction. Through projects like building Minecraft from scratch using C++ and OpenGL or designing a Sonic Narrative performance with Kyma, Julia has established her ability to merge technical precision with artistic expression. Work experiences at NASA, Girls Who Code, and ConocoPhillips have equipped Julia with technical and leadership skills, while her extracurricular involvement in music, game development, and student advocacy reflects her commitment to creating a community. Julia values ethical, community-conscious workplaces that amplify employee voices and encourage creative exploration.
      </p>
    </>
  );
}