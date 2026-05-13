import "@testing-library/jest-dom";

class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    root = null;
    rootMargin = "";
    thresholds = [];
    takeRecords() {
        return [];
    }
}

global.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
