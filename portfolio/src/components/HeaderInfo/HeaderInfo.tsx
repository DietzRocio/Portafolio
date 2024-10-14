import useLanguage from "../../hook/useLanguage";
import DownloadButton from "../DownloadButton/DownloadButton";
import SocialButton from "../SocialButton/SocialButton";

const HeaderInfo: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();

  return (
    <div className="profile_container">
      <img
        src={`${process.env.PUBLIC_URL}/assets/cv/profile_photo.png`}
        alt="Profile photo"
        className="profile_photo"
      />
      <div className="profile_text">
        <h1>Rocío Dietz</h1>
        <p>
          <span>
            {isSpanish
              ? "Desarrolladora de Software | Concretando ideas a través del código."
              : "Software Developer | Bringing ideas to life through code."}
          </span>
        </p>
        <div>
          <SocialButton
            url="https://www.linkedin.com/in/dietz-rocio/"
            name="LinkedIn"
            iconPath="/assets/icons/linkedin.svg"
            backgroundColor="#0077B5"
          />
          <SocialButton
            url="https://github.com/DietzRocio"
            name="GitHub"
            iconPath="/assets/icons/github-white.svg"
            backgroundColor="#333"
          />
          <DownloadButton
            name="Curriculum Vitae"
            iconPath="/assets/icons/document-pdf.svg"
            filePath={
              "/assets/files/CV_Dietz.pdf"
            }
            downloadName={
              "CV_Dietz.pdf"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
