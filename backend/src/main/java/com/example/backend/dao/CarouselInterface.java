package com.example.backend.dao;

import com.example.backend.model.Carousel;
import java.util.List;

public interface CarouselInterface {
	Carousel getAllCarousel();

	int updateCarousel(List<String> newLinks);
}
