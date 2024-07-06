export const DotsSpinner = () => {
  return (
    <div className="flex gap-2">
      <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
      <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
      <div className="h-2 w-2 animate-pulse rounded-full bg-white"></div>
    </div>
  );
};

export const WaitingGameSpinner = () => {
  return (
    <div className="flex gap-2">
      <div className="bg-blue-violet h-10 w-10 animate-pulse rounded-full"></div>
      <div className="bg-blue-violet h-10 w-10 animate-pulse rounded-full"></div>
      <div className="bg-blue-violet h-10 w-10 animate-pulse rounded-full"></div>
    </div>
  );
};
