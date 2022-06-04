export const ORDER_DIRECTION = {
    ASC: 'asc',
    DESC: 'desc',
};

// des => desa

export const INITIAL_STATE_ASSETS_NFTS = {
    results: {},
    loading: false,
    error: null,
    limit: 10,
    include_orders: false,
    order_direction: ORDER_DIRECTION.DESC,
    next_page: null,
    previous_page: null,
};