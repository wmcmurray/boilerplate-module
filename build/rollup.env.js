const NODE_ENV = process.env.NODE_ENV || null;

export default {
  isProd: NODE_ENV === 'prod',
}
