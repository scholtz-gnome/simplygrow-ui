// in same way as search.icon.tsx, let this component create an 'X' svg  for clearing the search input
//

type ClearIconProps = {
  onClick: () => void;
};

export const ClearIcon = (props: ClearIconProps) => (
  <div onClick={props.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" fill="#878B93"></line>
      <line x1="6" y1="6" x2="18" y2="18" fill="#878B93"></line>
    </svg>
  </div>
);
