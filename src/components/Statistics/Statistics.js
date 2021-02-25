import PropTypes from "prop-types";
import getRandomRgb from "./ColorPicker";
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => (
  <div className={s.container}>
    <section className={s.statistics}>
      {title.length > 0 ? <h2 className={s.title}>{title}</h2> : null}

      <ul className={s.statList}>
        {stats.map((item) => (
          <li
            key={item.id}
            className={s.item}
            style={{ backgroundColor: getRandomRgb() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
