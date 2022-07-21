class DescriptorObject extends Descriptor {
    constructor(options = {}) {
        super(options.name ?? options.full, options.short);
        delete options.name;
        delete options.full;
        delete options.short;
        Object.assign(this, options);
    }
}