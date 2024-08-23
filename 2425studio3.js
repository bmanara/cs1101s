const cost_per_meter = 199.95;

function circumference(radius) {
    return 2 * math_PI * radius;
}

function cost_of_circular_handrail(r) {   
    return cost_per_meter * circumference(r);
}

cost_of_circular_handrail(2.1);

