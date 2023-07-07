type Props = {
  picture: string;
  name: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-24 h-24 rounded-full mr-2 object-cover"
        alt={name}
      />
    </div>
  );
};

export default Avatar;
