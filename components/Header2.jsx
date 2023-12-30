const Header2 = () => {
  const list = [
    {
      name: 'Delhi',
    },
    {
      name: 'Noida',
    },
    {
      name: 'Gurgaon',
    },
    {
      name: 'Cuclkata',
    },
    {
      name: 'Badaun',
    },
    {
      name: 'Sheshwan',
    },
    {
      name: 'Surat',
    },
    {
      name: 'Gujrat',
    },
    {
      name: 'All Cities',
    },
  ];
  return (
    <div>
      <div className="flex px-10 py-3 bg-gray-100 justify-between">
        {list.map((ele, i) => {
          return <span key={i}>{ele.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Header2;
