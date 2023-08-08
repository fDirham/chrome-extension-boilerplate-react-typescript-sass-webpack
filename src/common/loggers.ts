export function appLog(...args: any) {
  console.log('[EXTENSION]', ...args);
}

export function appLogError(...args: any) {
  console.error('[EXTENSION-ERROR]', ...args);
}
