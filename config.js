module.exports = {
  /** Site MetaData (Required all)*/
  title: `Dev.comwls`,                           // (* Required)
  description: `comwls의 웹 개발 블로그입니다. 프론트엔드 와 PHP을 주로 다루며 nodejs와 그 외 기술에도 지속적으로 관심을 기울이고 있습니다.`, // (* Required)
  author: `comwls`,                         // (* Required)
  siteUrl: 'https://comwls.github.io',       // (* Required) 
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'profile.png', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Web PHP && Front-end Developer. / laravel, nodejs, react ...',
  name: 'comwls',
  company: 'Ntuple',
  location: 'Korea',
  email: 'comwls@naver.com',
  website: 'https://comwls.github.io',           // ex.'https://junhobaik.github.io'
  linkedin: '',                                     // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                     // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: '', // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/comwls',           // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: 'http-comwls-github-io',   // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: 'UA-164490121-1',                                  // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: 'google-site-verification=SzI01rP04eaV4iKV3_GwAWhimLCPC5zgCDyWsTuerDs', // content value in HTML tag of google search console ownership verification
  googleAdsenseSlot: '',                                    // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: 'ca-pub-5786680437567073',                     // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
