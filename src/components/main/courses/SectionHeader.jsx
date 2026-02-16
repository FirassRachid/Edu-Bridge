import "./section-header.css";
function SectionHeader({title , text}) {
  return (
    <div className="section-header">
      <p className="s-h-p1">Practice Advice</p>
      <h2 className="s-h-h2">{title}</h2>
      <p className="p-c-t">{text}</p> 
    </div>
  );
}

export default SectionHeader;
