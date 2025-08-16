import { 
FacebookShareButton,
WhatsappShareButton,
TwitterShareButton,
LinkedinShareButton,
FacebookIcon,
WhatsappIcon,
TwitterIcon,
LinkedinIcon, } from "react-share";

const ShareButtons = ({ url, title, description, imageUrl }) => {
  // Meta tags para o Facebook (Open Graph)
  const facebookProps = {
    quote: description,
    hashtag: '#FotosQueContam',
  };

  return (
    <div className="flex flex-col gap-2 px-6">
      <p className="text-sm text-gray-700 dark:text-white">Compartilhar:</p>
      <div className="flex gap-3">
        <FacebookShareButton 
          url={url} 
          {...facebookProps}
          className="hover:opacity-80 transition-opacity"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton 
          url={url} 
          title={title}
          className="hover:opacity-80 transition-opacity"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WhatsappShareButton 
          url={url} 
          title={title}
          className="hover:opacity-80 transition-opacity"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <LinkedinShareButton 
          url={url} 
          title={title}
          summary={description}
          className="hover:opacity-80 transition-opacity"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;