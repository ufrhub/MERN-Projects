const button = document.querySelector('.button');

button.addEventListener('click', () => {
    const element = document.querySelector('.collapsible');
    const isCollapsed = element.classList.contains('collapsed');
    applyFLIPAnimation();

    element.classList.remove('collapsed');

    if (isCollapsed) {
        element.classList.add('animate-expand');
    } else {
        element.classList.add('animate-collapse');
    }

    const cleanup = () => {
        element.classList.remove('animate-collapse', 'animate-expand');
        element.classList.toggle('collapsed', !isCollapsed);
        element.removeEventListener('animationend', cleanup);
    }
    element.addEventListener('animationend', cleanup)
});

/**
* This is a modified version of the FLIP technique. We're not putting
* the app into the end position before transitioning. It means there are
* more layout calculations, but less than if we were to animate on height
*/
function applyFLIPAnimation() {
    const element = document.querySelector('.collapsible');
    const siblings = Array.from(document.querySelectorAll('.collapsible ~ *'));
    const isCollapsed = element.classList.contains('collapsed');

    // Calculate the starting position for each sibling
    const siblingStates = siblings.map(elem => {
        return {
            elem,
            start: elem.getBoundingClientRect()
        }
    })

    // Recalculate layout once
    element.classList.toggle('collapsed');

    // Calculate the end position for all siblings and set up the transition
    siblingStates.forEach(state => {
        const elem = state.elem;
        const end = elem.getBoundingClientRect();
        let diff = end.top - state.start.top;
        if (isCollapsed) {
            diff = -diff;
        }

        const transitionStart = `translateY(${diff}px)`
        const transitionEnd = '';

        elem.style.transform = isCollapsed ? transitionStart : transitionEnd;

        // clean up based on whichever animation ends first
        elem.addEventListener('transitionend', cleanTransitions);
        element.addEventListener('animationend', cleanTransitions.bind(elem));

        requestAnimationFrame(() => {
            // Set the transition
            elem.classList.add('animate-on-transform');

            requestAnimationFrame(() => {
                // Trigger the animation
                elem.style.transform = isCollapsed ? transitionEnd : transitionStart;
            })
        })
    });

    // Put it back
    element.classList.toggle('collapsed');
}

function cleanTransitions() {
    this.style.transform = '';
    this.classList.remove('animate-on-transform');
    this.removeEventListener('transitionend', cleanTransitions);
}

function injectStyles() {
    const elem = document.createElement('style');
    Object.assign(elem, {
        type: 'text/css',
        innerHTML: createKeyframeAnimation()
    });

    document.querySelector('head').appendChild(elem);
}

function calculateCollapsedScale(collapsed, expanded) {
    // We can't use 0s in the divisions, or they can mess up the calcs
    // and give us Infinity/NaNs, so replace them with 1s
    const collapsedCalc = {
        width: Math.max(collapsed.width, 1),
        height: Math.max(collapsed.height, 1)
    }

    const expandedCalc = {
        width: Math.max(expanded.width, 1),
        height: Math.max(expanded.height, 1)
    }

    return {
        x: collapsedCalc.width / expandedCalc.width,
        y: collapsedCalc.height / expandedCalc.height
    };
}

function createKeyframeAnimation() {
    // Figure out the size of the element when collapsed.
    // We have to force some layout recalculations here
    const element = document.querySelector('.collapsible');

    const isCollapsed = element.classList.contains('collapsed');
    element.classList.remove('collapsed');

    const expanded = element.getBoundingClientRect();
    element.classList.add('collapsed');
    const collapsed = element.getBoundingClientRect();
    element.classList.toggle('collapsed', isCollapsed);

    let { x, y } = calculateCollapsedScale(collapsed, expanded);
    let animation = '';
    let inverseAnimation = '';

    for (let step = 0; step <= 100; step++) {
        // Remap the step value to an eased one.
        // This is currently linear
        let easedStep = step / 100;

        // Calculate the scale of the element.
        const xScale = x + (1 - x) * easedStep;
        const yScale = y + (1 - y) * easedStep;

        animation += `${step}% {
      transform: scale(${xScale}, ${yScale});
    }`;

        // And now the inverse for the contents.
        const invXScale = 1 / xScale;
        const invYScale = 1 / yScale;
        inverseAnimation += `${step}% {
      transform: scale(${invXScale}, ${invYScale});
    }`;

    }

    return `
  @keyframes collapseAnimation {
    ${animation}
  }

  @keyframes collapseContentAnimation {
    ${inverseAnimation}
  }`;
}

window.addEventListener('load', injectStyles);