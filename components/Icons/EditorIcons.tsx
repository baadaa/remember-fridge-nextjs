export const IconClose: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg width="31" height="31" xmlns="http://www.w3.org/2000/svg">
    <g
      transform="translate(1 1)"
      stroke="var(--closeButtonStroke)"
      fill="none"
      fillRule="evenodd"
    >
      <circle cx="14.5" cy="14.5" r="14.5" />
      <path d="M9 9l12 12M21 9L9 21" strokeLinecap="square" />
    </g>
  </svg>
);

export const IconYes: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg width="12" height="10" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.597.156c1.247-.031 1.87 1.465.982 2.338L5.221 8.852c-.39.39-1.044.39-1.434 0L.561 5.61c-1.34-1.278.639-3.257 1.917-1.916L4.27 5.486c.125.124.343.124.483 0l4.91-4.91c.249-.264.576-.405.934-.42Z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
);

export const IconNo: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.302 0C.969 0 .632.129.379.382a1.312 1.312 0 0 0 0 1.845l2.776 2.776L.379 7.778a1.312 1.312 0 0 0 0 1.845c.246.245.586.382.923.382.337 0 .677-.137.922-.382L5 6.847l2.776 2.776c.245.245.585.382.922.382.337 0 .678-.137.923-.382a1.312 1.312 0 0 0 0-1.845L6.845 5.003l2.776-2.776a1.312 1.312 0 0 0 0-1.845 1.312 1.312 0 0 0-1.845 0L5 3.158 2.224.382A1.307 1.307 0 0 0 1.302 0Z"
      fill="var(--noIconColor)"
      fillRule="evenodd"
    />
  </svg>
);

export const IconTrash: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
    <g fill="#FFF" fillRule="nonzero">
      <path d="M0 5.06c0 .698.566 1.264 1.265 1.264v6.324a2.53 2.53 0 0 0 2.53 2.53h6.324a2.53 2.53 0 0 0 2.53-2.53V6.324c.698 0 1.264-.566 1.264-1.265V3.794c0-.698-.566-1.264-1.265-1.264h-2.53V1.265C10.119.566 9.553 0 8.855 0H5.059c-.698 0-1.265.566-1.265 1.265V2.53h-2.53C.567 2.53 0 3.096 0 3.794V5.06Zm11.383 7.588c0 .699-.566 1.265-1.264 1.265H3.794a1.265 1.265 0 0 1-1.264-1.265V6.324h8.853v6.324ZM5.06 1.265h3.795V2.53H5.059V1.265Zm-3.794 2.53h11.383v1.264H1.265V3.794Z" />
      <path d="M4.427 12.648c.35 0 .632-.283.632-.632V8.22a.632.632 0 0 0-1.265 0v3.795c0 .35.284.632.633.632ZM6.957 12.648c.349 0 .632-.283.632-.632V8.22a.632.632 0 0 0-1.265 0v3.795c0 .35.283.632.633.632ZM9.486 12.648c.35 0 .633-.283.633-.632V8.22a.632.632 0 0 0-1.265 0v3.795c0 .35.283.632.632.632Z" />
    </g>
  </svg>
);

export const IconRotate: React.FC<React.SVGAttributes<SVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
    <path
      fill="var(--settingsContent)"
      d="M31.5 45.8l-7 6.2a31 31 0 0131-29.4 4 4 0 000-8.2 39.3 39.3 0 00-39.1 34.9l-4.1-4.8A4 4 0 006 50l11.6 13.3.4.4.7.5.7.3.8.2H21.6l.2-.1c.3 0 .5-.2.7-.3l.8-.5h.2L36.9 52a4 4 0 00-5.4-6.2zM93.7 40.5a4 4 0 00-2.9-1.2h-38a4 4 0 00-4.2 4.1v38.1a4 4 0 004.1 4h38.1a4 4 0 004-4v-38a4 4 0 00-1.1-3zm-7 37H56.8v-30h30v30z"
    />
  </svg>
);
