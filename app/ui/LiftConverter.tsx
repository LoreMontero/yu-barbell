const LiftConverter = () => {
  return (
    <div className="flex flex-col bg-accent rounded-lg fit-content p-2">
      <form className="flex flex-col gap-2">
        <div className="flex bg-background p-4 rounded-md justify-around">
          <input 
            type="number"
            // value={}
            placeholder="Enter Weight in lbs"
            // onChange={}
            className="bg-background"
          />
          <button className="bg-black rounded-2xl px-2 py-1">Front Squat</button>
        </div>
        <div className="flex bg-background p-4 rounded-md justify-around">
          <input 
            type="number"
            placeholder="Enter Weight in lbs"
            // value={}
            // onChange={}
            className="bg-background"
          />
          <button className="bg-black rounded-2xl px-2 py-1">Competition Squat</button>
        </div> 
        <button className="bg-primary rounded-2xl px-2 py-1">Convert</button>
      </form>
    </div>
  );
};

export default LiftConverter;
