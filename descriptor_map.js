class DescriptorMap extends Map {
    constructor(descriptors) {
        if (_.isArray(descriptors))
            this.add(descriptors);
    }

    add(descriptor) {
        this.set(descriptor.name, descriptor);
    }
}