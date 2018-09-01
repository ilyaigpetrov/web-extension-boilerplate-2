import Weer from 'weer';

window.Weer = Weer;

Weer.install({
  sendReports: {
    toEmail: 'ilyaigpetrov+weer-test@gmail.com',
    inLanguages: ['en'],
  },
});
