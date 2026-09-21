---
title: Fifteen years of green in four panels
date: 2026-06-30
summary: NDVI along the Armenia–Montenegro alignment, 2010 to 2025. Mostly recovery, with the losses exactly where the field stations found erosion.
tags: [remote sensing, Google Earth Engine, Quindío]
place: Armenia–Montenegro corridor
cover: /work/quindio/ndvi-cambio.jpg
---

Four annual median composites — 2010, 2015, 2020, 2025 — from Landsat
Collection 2 Level 2, cloud-masked pixel by pixel because in the Andes there
is no such thing as a clear scene, only a clear pixel.

The numbers along the alignment:

| | |
|---|---|
| Gain (ΔNDVI > +0.10) | 32 % |
| Stable | 63 % |
| Loss (ΔNDVI < −0.10) | 5 % |
| Median NDVI 2010 → 2025 | 0.61 → 0.67 |

So the landscape is greening. Abandoned pasture and coffee going back to
secondary forest, which is the story almost everywhere in the coffee region.

The interesting part is the 5 %. Plot the loss pixels and they cluster along
the drainages and the cut slopes — the same places that turned up as stations
in the field notebook. Satellite and hammer agree, which is the only time I
trust either of them.

The workflow is now [Verdant](https://github.com/oscgonz19/Verdant): draw
an area of interest, pick years, get the panels.
