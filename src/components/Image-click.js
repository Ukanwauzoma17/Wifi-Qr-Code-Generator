
export function ImageButton({ children, onClick,image , ...props}) {
    return (
      <div {...props}>
        <img src={image} onClick={onClick}>
        </img>
      </div>
    );
  }
  