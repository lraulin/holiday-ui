const queryString = (params) =>
  Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&');

const formatDate = (d = new Date()) =>
  (d.getMonth() + 1).toString().padStart(2, '0') +
  '/' +
  d.getDate().toString().padStart(2, '0') +
  '/' +
  d.getFullYear();

const getQueryString = () => {
  const endDate = new Date();
  const startDate = new Date(endDate - 12 * 24 * 60 * 60 * 1000);
  const query = {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
    type: 'HOURLY',
    status: 'submitted,confirmed,preapproved',
    dateRangeType: 'workDate',
  };
  return queryString(query);
};

const BookerUrl = ({ displayText }) => (
  <a
    href={'https://www.snapnursebooker.com/admin/timecards?' + getQueryString()}
    target="_blank"
    rel="noreferrer"
  >
    {displayText}
  </a>
);

export default BookerUrl;
