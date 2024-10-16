const ProductStatus = ({ status }: { status: "pending" | "confirmed" }) => {
  const config = {
    pending: {
      textColor: "text-[#FF8229]",
      bgColor: "bg-[#FFF6F0]",
    },
    confirmed: {
      textColor: "text-[#1F9E45]",
      bgColor: "bg-[#F0FFF6]",
    },
    rejected: {
      textColor: "text-[#DC232F]",
      bgColor: "bg-[#FFF1F0]",
    },
  };

  return (
    <p
      className={`text-center text-xs capitalize rounded p-1 ${config[status].textColor} ${config[status].bgColor}`}
    >
      {status}
    </p>
  );
};

export default ProductStatus;
