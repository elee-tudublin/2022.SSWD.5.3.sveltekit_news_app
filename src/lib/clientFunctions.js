export function add(a=0,b=0) {
    return a+b;
}

// see https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore
export function formatDate(d='') {
    return new Date(d).toLocaleDateString(
      'en-ie',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }
    );
  }
