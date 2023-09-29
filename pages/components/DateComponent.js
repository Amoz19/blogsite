const DateComponent = ({ createdAt, format }) => {
  return (
    <p className={format === "md" ? "w-2/5 text-slate-900/80" : ""}>
      {createdAt}
    </p>
  );
};

export default DateComponent;
