import PropTypes from "prop-types";

export default function Title({ title }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-16">
      {title}
    </h2>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};
