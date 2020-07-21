import moment from 'moment';

const Date = (date) => {
  return moment(date).format('DD MMMM YYYY');
};

export default Date;
