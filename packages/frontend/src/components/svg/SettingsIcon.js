import React from "react";

const SettingsIcon = ({ color = "#D5D4D8" }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip9230492040)">
        <path
          d="M12 15.1284C13.6569 15.1284 15 13.7853 15 12.1284C15 10.4716 13.6569 9.12842 12 9.12842C10.3431 9.12842 9 10.4716 9 12.1284C9 13.7853 10.3431 15.1284 12 15.1284Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.4 15.1284C19.2669 15.43 19.2272 15.7646 19.286 16.089C19.3448 16.4134 19.4995 16.7127 19.73 16.9484L19.79 17.0084C19.976 17.1942 20.1235 17.4147 20.2241 17.6575C20.3248 17.9003 20.3766 18.1606 20.3766 18.4234C20.3766 18.6862 20.3248 18.9465 20.2241 19.1893C20.1235 19.4321 19.976 19.6527 19.79 19.8384C19.6043 20.0244 19.3837 20.1719 19.1409 20.2725C18.8981 20.3732 18.6378 20.425 18.375 20.425C18.1122 20.425 17.8519 20.3732 17.6091 20.2725C17.3663 20.1719 17.1457 20.0244 16.96 19.8384L16.9 19.7784C16.6643 19.5479 16.365 19.3932 16.0406 19.3344C15.7162 19.2756 15.3816 19.3153 15.08 19.4484C14.7842 19.5752 14.532 19.7857 14.3543 20.0539C14.1766 20.3222 14.0813 20.6366 14.08 20.9584V21.1284C14.08 21.6588 13.8693 22.1676 13.4942 22.5426C13.1191 22.9177 12.6104 23.1284 12.08 23.1284C11.5496 23.1284 11.0409 22.9177 10.6658 22.5426C10.2907 22.1676 10.08 21.6588 10.08 21.1284V21.0384C10.0723 20.7074 9.96512 20.3864 9.77251 20.1171C9.5799 19.8478 9.31074 19.6427 9 19.5284C8.69838 19.3953 8.36381 19.3556 8.03941 19.4144C7.71502 19.4732 7.41568 19.6279 7.18 19.8584L7.12 19.9184C6.93425 20.1044 6.71368 20.2519 6.47088 20.3525C6.22808 20.4532 5.96783 20.505 5.705 20.505C5.44217 20.505 5.18192 20.4532 4.93912 20.3525C4.69632 20.2519 4.47575 20.1044 4.29 19.9184C4.10405 19.7327 3.95653 19.5121 3.85588 19.2693C3.75523 19.0265 3.70343 18.7662 3.70343 18.5034C3.70343 18.2406 3.75523 17.9803 3.85588 17.7375C3.95653 17.4947 4.10405 17.2742 4.29 17.0884L4.35 17.0284C4.58054 16.7927 4.73519 16.4934 4.794 16.169C4.85282 15.8446 4.81312 15.51 4.68 15.2084C4.55324 14.9126 4.34276 14.6604 4.07447 14.4827C3.80618 14.305 3.49179 14.2097 3.17 14.2084H3C2.46957 14.2084 1.96086 13.9977 1.58579 13.6226C1.21071 13.2476 1 12.7388 1 12.2084C1 11.678 1.21071 11.1693 1.58579 10.7942C1.96086 10.4191 2.46957 10.2084 3 10.2084H3.09C3.42099 10.2007 3.742 10.0935 4.0113 9.90092C4.28059 9.70832 4.48572 9.43915 4.6 9.12841C4.73312 8.8268 4.77282 8.49222 4.714 8.16783C4.65519 7.84343 4.50054 7.54409 4.27 7.30841L4.21 7.24841C4.02405 7.06267 3.87653 6.84209 3.77588 6.59929C3.67523 6.3565 3.62343 6.09625 3.62343 5.83341C3.62343 5.57058 3.67523 5.31033 3.77588 5.06753C3.87653 4.82474 4.02405 4.60416 4.21 4.41841C4.39575 4.23246 4.61632 4.08494 4.85912 3.98429C5.10192 3.88365 5.36217 3.83184 5.625 3.83184C5.88783 3.83184 6.14808 3.88365 6.39088 3.98429C6.63368 4.08494 6.85425 4.23246 7.04 4.41841L7.1 4.47841C7.33568 4.70895 7.63502 4.8636 7.95941 4.92242C8.28381 4.98124 8.61838 4.94153 8.92 4.80841H9C9.29577 4.68165 9.54802 4.47117 9.72569 4.20288C9.90337 3.93459 9.99872 3.6202 10 3.29841V3.12841C10 2.59798 10.2107 2.08927 10.5858 1.7142C10.9609 1.33913 11.4696 1.12841 12 1.12841C12.5304 1.12841 13.0391 1.33913 13.4142 1.7142C13.7893 2.08927 14 2.59798 14 3.12841V3.21841C14.0013 3.5402 14.0966 3.85459 14.2743 4.12288C14.452 4.39117 14.7042 4.60165 15 4.72841C15.3016 4.86153 15.6362 4.90124 15.9606 4.84242C16.285 4.7836 16.5843 4.62895 16.82 4.39841L16.88 4.33841C17.0657 4.15246 17.2863 4.00494 17.5291 3.90429C17.7719 3.80365 18.0322 3.75184 18.295 3.75184C18.5578 3.75184 18.8181 3.80365 19.0609 3.90429C19.3037 4.00494 19.5243 4.15246 19.71 4.33841C19.896 4.52416 20.0435 4.74474 20.1441 4.98753C20.2448 5.23033 20.2966 5.49058 20.2966 5.75341C20.2966 6.01625 20.2448 6.2765 20.1441 6.51929C20.0435 6.76209 19.896 6.98267 19.71 7.16841L19.65 7.22841C19.4195 7.46409 19.2648 7.76343 19.206 8.08783C19.1472 8.41222 19.1869 8.7468 19.32 9.04841V9.12841C19.4468 9.42418 19.6572 9.67643 19.9255 9.85411C20.1938 10.0318 20.5082 10.1271 20.83 10.1284H21C21.5304 10.1284 22.0391 10.3391 22.4142 10.7142C22.7893 11.0893 23 11.598 23 12.1284C23 12.6588 22.7893 13.1676 22.4142 13.5426C22.0391 13.9177 21.5304 14.1284 21 14.1284H20.91C20.5882 14.1297 20.2738 14.225 20.0055 14.4027C19.7372 14.5804 19.5268 14.8326 19.4 15.1284V15.1284Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" transform="translate(0 0.128414)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SettingsIcon;
