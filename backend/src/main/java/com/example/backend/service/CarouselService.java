package com.example.backend.service;

import com.example.backend.dao.CarouselInterface;
import com.example.backend.model.Carousel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarouselService {

    private CarouselInterface carouselInterface;

    public CarouselService(CarouselInterface carouselInterface) {
        this.carouselInterface = carouselInterface;
    }

    // public List<Carousel> getAllCarousel() {
    // return CarouselInterface.getAllCarousel();
    // }
}
