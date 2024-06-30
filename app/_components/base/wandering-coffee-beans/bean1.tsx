import { UIComponent } from '@/app/_types/component-types';

export const Bean1 = (props: UIComponent) => {
  return (
    <div className={props.tailwind}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="149"
        viewBox="0 0 72 149"
        fill="none"
      >
        <g clipPath="url(#clip0_12_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-25.4257 146.248C-29.2139 144.852 -32.7047 142.676 -35.6978 139.846C-31.3033 139.729 -26.927 139.203 -22.6194 138.273C-13.0817 135.862 -4.28015 130.914 2.95483 123.895C17.0921 109.798 23.5519 94.2974 29.4292 76.1007C34.2244 59.8433 37.9573 43.2547 40.6014 26.4528C41.9251 20.8365 42.7722 15.2202 44.096 9.60391C44.5196 8.19984 45.155 6.62725 45.5256 5.27934C45.8962 3.93144 46.0021 4.54923 44.9432 5.27934C43.8842 6.00946 45.7903 4.66152 48.3319 3.93141C74.3297 16.0064 80.1011 56.1067 60.563 95.0275C41.0249 133.948 2.31945 157.874 -25.3198 146.753L-25.4257 146.248ZM-37.4451 138.498C-54.3887 121.649 -55.9242 87.4456 -39.3513 54.2533C-23.9432 23.3076 3.00778 2.35887 27.2054 -0.168457C26.517 1.68492 26.1464 3.48215 25.8817 4.15611C24.8227 10.5587 24.1873 16.9612 23.5519 23.3076C22.6397 39.9602 20.7831 56.5396 17.9923 72.9556C14.2858 90.2537 10.0499 105.53 -1.38701 120.132C-7.36521 127.167 -14.9784 132.415 -23.4666 135.352C-28.0138 136.866 -32.6995 137.864 -37.4451 138.329V138.498Z"
            fill="#AF7F58"
            fillOpacity="0.15"
          />
        </g>
        <defs>
          <clipPath id="clip0_12_28">
            <rect
              width="123"
              height="149"
              fill="white"
              transform="translate(-51)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
