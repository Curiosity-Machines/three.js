import { Texture } from './Texture.js';
import { ClampToEdgeWrapping } from '../constants.js';

class ImageArrayTexture extends Texture {

	constructor( images, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, colorSpace ) {

		const depth = images.length;

		super( null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace );

		this.isImageArrayTexture = true;

		this.image = { data: images, width, height, depth };

		this.wrapR = ClampToEdgeWrapping;

		this.layerUpdates = new Set();

	}

	addLayerUpdate( layerIndex ) {

		this.layerUpdates.add( layerIndex );

	}

	clearLayerUpdates() {

		this.layerUpdates.clear();

	}

}

export { ImageArrayTexture };
