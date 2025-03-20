type SearchIconProps = {
  fillColour?: string;
};

const SearchIcon = (props: SearchIconProps) => {
  const fillColour = props.fillColour ?? '#878B93';
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill={'none'} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 3.54528C5.3505 3.54528 3 5.6821 3 8.318C3 10.9539 5.3505 13.0907 8.25 13.0907C11.1495 13.0907 13.5 10.9539 13.5 8.318C13.5 5.6821 11.1495 3.54528 8.25 3.54528ZM1.5 8.318C1.5 4.92898 4.52208 2.18164 8.25 2.18164C11.9779 2.18164 15 4.92898 15 8.318C15 11.707 11.9779 14.4544 8.25 14.4544C4.52208 14.4544 1.5 11.707 1.5 8.318Z"
        fill={fillColour}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9572 11.689C12.2501 11.4227 12.725 11.4227 13.0179 11.689L16.2804 14.6549C16.5733 14.9211 16.5733 15.3528 16.2804 15.6191C15.9875 15.8854 15.5126 15.8854 15.2197 15.6191L11.9572 12.6532C11.6643 12.3869 11.6643 11.9552 11.9572 11.689Z"
        fill={fillColour}
      />
    </svg>
  );
};

export default SearchIcon;
